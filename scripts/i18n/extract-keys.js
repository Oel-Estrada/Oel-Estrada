/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';

import {
    COLORS,
    createQuestionAsker,
    getLogPrefix,
    loadSharedConfig,
    LOCALES_DIR,
} from './utils.js';

const LOG_PREFIX = getLogPrefix('extract');

/**
 * Gets all keys from an object recursively, including nested objects.
 */
function getAllKeys(obj, prefix = '') {
    return Object.keys(obj).reduce((res, el) => {
        const fullKey = prefix ? `${prefix}.${el}` : el;
        const value = obj[el];
        const isObject =
            typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value);

        // Añadir la clave actual (sea objeto, array o valor simple)
        res[fullKey] = value;

        if (isObject) {
            return { ...res, ...getAllKeys(value, fullKey) };
        }
        return res;
    }, {});
}

function setDeepValue(obj, keyPath, value) {
    const keys = keyPath.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (
            !(key in current) ||
            typeof current[key] !== 'object' ||
            current[key] === null
        ) {
            current[key] = {};
        }
        current = current[key];
    }
    current[keys[keys.length - 1]] = value;
}

function getDeepValue(obj, keyPath) {
    const keys = keyPath.split('.');
    let current = obj;
    for (const key of keys) {
        if (
            current === null ||
            typeof current !== 'object' ||
            !(key in current)
        ) {
            return undefined;
        }
        current = current[key];
    }
    return current;
}

function deleteKeyPath(obj, keyPath) {
    const keys = keyPath.split('.');
    const stack = [];
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        stack.push({ obj: current, key: keys[i] });
        current = current[keys[i]];
        if (!current) return;
    }

    delete current[keys[keys.length - 1]];

    // Limpiar objetos vacíos hacia arriba
    for (let i = stack.length - 1; i >= 0; i--) {
        const { obj, key } = stack[i];
        if (Object.keys(obj[key]).length === 0) {
            delete obj[key];
        } else {
            break;
        }
    }
}

/**
 * Merges two objects deeply.
 */
function mergeDeep(target, source) {
    const isObject = (obj) =>
        obj && typeof obj === 'object' && !Array.isArray(obj);

    if (!isObject(target) || !isObject(source)) {
        return source;
    }

    Object.keys(source).forEach((key) => {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(targetValue, sourceValue);
        } else {
            target[key] = sourceValue;
        }
    });

    return target;
}

export async function extractKeys() {
    const { LANGUAGES, REFERENCE_LANG } = await loadSharedConfig();
    const { ask, close } = createQuestionAsker();
    const backups = new Map();
    const filesToCleanup = new Set();
    try {
        const referenceFiles = fs
            .readdirSync(path.join(LOCALES_DIR, REFERENCE_LANG))
            .filter((file) => file.endsWith('.json'));

        if (referenceFiles.length === 0) {
            console.log(
                `${LOG_PREFIX} ${COLORS.red}No se encontraron archivos JSON en el idioma de referencia (${REFERENCE_LANG}).${COLORS.reset}`,
            );
            close();
            return;
        }

        console.log(
            `\n${LOG_PREFIX} ${COLORS.bright}Archivos disponibles (o escribe 'c' para cancelar):${COLORS.reset}`,
        );
        referenceFiles.forEach((file, index) => {
            console.log(`${COLORS.cyan}${index + 1}.${COLORS.reset} ${file}`);
        });

        let fileIndex;
        while (true) {
            const fileIndexStr = await ask(
                `\n${COLORS.bright}Selecciona el número del archivo de origen:${COLORS.reset} `,
            );
            if (
                fileIndexStr.toLowerCase() === 'c' ||
                fileIndexStr.toLowerCase() === 'cancelar'
            ) {
                console.log(`${LOG_PREFIX} Operación cancelada.`);
                close();
                return;
            }
            fileIndex = parseInt(fileIndexStr) - 1;
            if (
                !isNaN(fileIndex) &&
                fileIndex >= 0 &&
                fileIndex < referenceFiles.length
            ) {
                break;
            }
            console.log(
                `${COLORS.red}Selección inválida. Por favor, introduce un número entre 1 y ${referenceFiles.length}.${COLORS.reset}`,
            );
        }

        const sourceFile = referenceFiles[fileIndex];
        const sourcePath = path.join(LOCALES_DIR, REFERENCE_LANG, sourceFile);
        const sourceContent = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
        const allKeysMap = getAllKeys(sourceContent);
        const allKeys = Object.keys(allKeysMap);

        console.log(
            `\n${LOG_PREFIX} ${COLORS.bright}Claves disponibles en ${COLORS.cyan}${sourceFile}${COLORS.reset} (o escribe 'c' para cancelar):`,
        );
        allKeys.forEach((key, index) => {
            const value = allKeysMap[key];
            const isObject =
                typeof value === 'object' &&
                value !== null &&
                !Array.isArray(value);
            const isArray = Array.isArray(value);

            let displayValue;
            if (isObject) {
                displayValue = `${COLORS.yellow}{...}${COLORS.reset}`;
            } else if (isArray) {
                displayValue = `${COLORS.yellow}[...]${COLORS.reset}`;
            } else {
                displayValue = `${COLORS.dim}(${value})${COLORS.reset}`;
            }

            console.log(
                `${COLORS.cyan}${index + 1}.${COLORS.reset} ${key} ${displayValue}`,
            );
        });

        let selectedIndices = [];
        while (true) {
            const selectedIndicesStr = await ask(
                `\n${COLORS.bright}Selecciona las claves (números separados por comas, ej: 1,3,5):${COLORS.reset} `,
            );
            if (
                selectedIndicesStr.toLowerCase() === 'c' ||
                selectedIndicesStr.toLowerCase() === 'cancelar'
            ) {
                console.log(`${LOG_PREFIX} Operación cancelada.`);
                close();
                return;
            }

            const parts = selectedIndicesStr.split(',').map((s) => s.trim());
            const indices = parts
                .map((s) => parseInt(s) - 1)
                .filter((i) => !isNaN(i) && i >= 0 && i < allKeys.length);

            if (indices.length > 0 && indices.length === parts.length) {
                selectedIndices = indices;
                break;
            } else {
                if (parts.length > 0 && parts[0] !== '') {
                    const invalidParts = parts.filter((p) => {
                        const i = parseInt(p) - 1;
                        return isNaN(i) || i < 0 || i >= allKeys.length;
                    });
                    console.log(
                        `${COLORS.red}Entrada inválida: ${invalidParts.join(', ')}. Por favor, introduce números válidos de la lista.${COLORS.reset}`,
                    );
                } else {
                    console.log(
                        `${COLORS.red}No se seleccionaron claves. Por favor, selecciona al menos una clave.${COLORS.reset}`,
                    );
                }
            }
        }

        let targetFileName = await ask(
            `\n${COLORS.bright}Nombre del nuevo archivo (ej: labels.json) o 'c' para cancelar:${COLORS.reset} `,
        );
        if (
            targetFileName.toLowerCase() === 'c' ||
            targetFileName.toLowerCase() === 'cancelar'
        ) {
            console.log(`${LOG_PREFIX} Operación cancelada.`);
            close();
            return;
        }

        if (!targetFileName.endsWith('.json')) {
            targetFileName += '.json';
            console.log(
                `${LOG_PREFIX} Se ha añadido la extensión .json: ${COLORS.cyan}${targetFileName}${COLORS.reset}`,
            );
        }

        const confirmExtractStr = await ask(
            `\n${COLORS.bright}¿Deseas extraer estas claves a ${COLORS.cyan}${targetFileName}${COLORS.reset}? (s/n/c):${COLORS.reset} `,
        );
        if (
            confirmExtractStr.toLowerCase() === 'c' ||
            confirmExtractStr.toLowerCase() === 'cancelar'
        ) {
            console.log(`${LOG_PREFIX} Operación cancelada.`);
            close();
            return;
        }
        if (confirmExtractStr.toLowerCase() !== 's') {
            console.log(`${LOG_PREFIX} Operación abortada.`);
            close();
            return;
        }

        const shouldDeleteFromSourceStr = await ask(
            `\n${COLORS.bright}¿Deseas eliminar estas claves del archivo original? (s/n/c):${COLORS.reset} `,
        );
        if (
            shouldDeleteFromSourceStr.toLowerCase() === 'c' ||
            shouldDeleteFromSourceStr.toLowerCase() === 'cancelar'
        ) {
            console.log(`${LOG_PREFIX} Operación cancelada.`);
            close();
            return;
        }
        const shouldDeleteFromSource =
            shouldDeleteFromSourceStr.toLowerCase() === 's';

        // Guardar backups antes de modificar nada
        for (const lang of LANGUAGES) {
            const langSourcePath = path.join(LOCALES_DIR, lang, sourceFile);
            if (fs.existsSync(langSourcePath)) {
                backups.set(
                    langSourcePath,
                    fs.readFileSync(langSourcePath, 'utf8'),
                );
            }
            const targetPath = path.join(LOCALES_DIR, lang, targetFileName);
            if (fs.existsSync(targetPath)) {
                backups.set(targetPath, fs.readFileSync(targetPath, 'utf8'));
            } else {
                filesToCleanup.add(targetPath);
            }
        }

        // Crear el objeto con las claves extraídas (para el idioma de referencia)
        const extractedObj = {};
        selectedIndices.forEach((i) => {
            const key = allKeys[i];
            setDeepValue(extractedObj, key, allKeysMap[key]);
        });

        // Guardar en todos los idiomas
        for (const lang of LANGUAGES) {
            const langDir = path.join(LOCALES_DIR, lang);
            if (!fs.existsSync(langDir))
                fs.mkdirSync(langDir, { recursive: true });

            const targetPath = path.join(langDir, targetFileName);
            let targetContent = {};

            if (fs.existsSync(targetPath)) {
                targetContent = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
            }

            const langExtractedObj = {};
            const otherLangSourcePath = path.join(
                LOCALES_DIR,
                lang,
                sourceFile,
            );
            let otherLangSourceContent = {};
            if (fs.existsSync(otherLangSourcePath)) {
                otherLangSourceContent = JSON.parse(
                    fs.readFileSync(otherLangSourcePath, 'utf8'),
                );
            }

            for (const i of selectedIndices) {
                const key = allKeys[i];
                let value;

                if (lang === REFERENCE_LANG) {
                    value = allKeysMap[key];
                } else {
                    value = getDeepValue(otherLangSourceContent, key);
                    if (value === undefined) {
                        value = JSON.stringify(allKeysMap[key]);
                    }
                }
                setDeepValue(langExtractedObj, key, value);

                if (
                    shouldDeleteFromSource &&
                    fs.existsSync(otherLangSourcePath)
                ) {
                    deleteKeyPath(otherLangSourceContent, key);
                }
            }

            if (shouldDeleteFromSource && fs.existsSync(otherLangSourcePath)) {
                fs.writeFileSync(
                    otherLangSourcePath,
                    JSON.stringify(otherLangSourceContent, null, 2) + '\n',
                    'utf8',
                );
            }

            const finalContent = mergeDeep(targetContent, langExtractedObj);
            fs.writeFileSync(
                targetPath,
                JSON.stringify(finalContent, null, 2) + '\n',
                'utf8',
            );
            console.log(
                `${LOG_PREFIX} ✅ Actualizado: ${COLORS.green}${lang}/${targetFileName}${COLORS.reset}`,
            );
        }

        if (shouldDeleteFromSource) {
            console.log(
                `${LOG_PREFIX} ✅ Claves eliminadas de los archivos originales.`,
            );
        }

        console.log(
            `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.yellow}⚠ Los cambios se han aplicado temporalmente.${COLORS.reset}`,
        );
        const confirm = await ask(
            `${COLORS.bright}${COLORS.cyan}¿Deseas confirmar los cambios? (s/n):${COLORS.reset} `,
        );

        if (confirm.toLowerCase() !== 's') {
            console.log(
                `\n${LOG_PREFIX} ${COLORS.red}Revirtiendo cambios...${COLORS.reset}`,
            );
            for (const [filePath, content] of backups) {
                fs.writeFileSync(filePath, content, 'utf8');
            }
            for (const filePath of filesToCleanup) {
                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            }
            console.log(
                `${LOG_PREFIX} ${COLORS.green}✅ Cambios revertidos con éxito.${COLORS.reset}\n`,
            );
        } else {
            console.log(
                `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.green}✨ ¡Extracción finalizada y confirmada!${COLORS.reset}\n`,
            );
        }
    } catch (error) {
        console.error(
            `\n${LOG_PREFIX} ${COLORS.red}Error: ${error.message}${COLORS.reset}`,
        );
        if (backups.size > 0 || filesToCleanup.size > 0) {
            console.log(`${LOG_PREFIX} Intentando revertir cambios...`);
            for (const [filePath, content] of backups) {
                fs.writeFileSync(filePath, content, 'utf8');
            }
            for (const filePath of filesToCleanup) {
                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            }
        }
    } finally {
        close();
    }
}

if (process.argv[1].endsWith('extract-keys.js')) {
    extractKeys();
}
