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

const LOG_PREFIX = getLogPrefix('sync');

/**
 * Fills missing translations interactively.
 */
async function fillMissingInteractive(
    ref,
    target,
    lang,
    file,
    ask,
    REFERENCE_LANG,
    prefix = '',
) {
    const result = { ...target };

    for (const key in ref) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (
            typeof ref[key] === 'object' &&
            ref[key] !== null &&
            !Array.isArray(ref[key])
        ) {
            result[key] = await fillMissingInteractive(
                ref[key],
                target[key] || {},
                lang,
                file,
                ask,
                REFERENCE_LANG,
                fullKey,
            );
        } else if (!(key in target)) {
            console.log(
                `\n${LOG_PREFIX} Falta traducción en ${COLORS.bright}${COLORS.yellow}[${lang}]${COLORS.reset} para el archivo "${COLORS.cyan}${file}${COLORS.reset}":`,
            );
            console.log(
                `${COLORS.dim}Clave:${COLORS.reset} ${COLORS.bright}${fullKey}${COLORS.reset}`,
            );
            console.log(
                `${COLORS.dim}Texto original (${REFERENCE_LANG}):${COLORS.reset} ${COLORS.green}${ref[key]}${COLORS.reset}`,
            );

            const answer = await ask(
                `${COLORS.bright}${COLORS.cyan}Introduce la traducción${COLORS.reset} (deja vacío para "${ref[key]}"): `,
            );
            result[key] = answer.trim() || ref[key];
        }
    }
    return result;
}

/**
 * Synchronizes locale files by adding missing keys interactively.
 */
export async function syncLocales() {
    const { LANGUAGES, REFERENCE_LANG } = await loadSharedConfig();
    const { ask, close } = createQuestionAsker();
    const referenceFiles = fs.readdirSync(
        path.join(LOCALES_DIR, REFERENCE_LANG),
    );
    const backups = new Map();

    try {
        for (const file of referenceFiles) {
            if (!file.endsWith('.json')) continue;

            const refPath = path.join(LOCALES_DIR, REFERENCE_LANG, file);
            const refContent = JSON.parse(fs.readFileSync(refPath, 'utf8'));

            for (const lang of LANGUAGES) {
                if (lang === REFERENCE_LANG) continue;

                const langDir = path.join(LOCALES_DIR, lang);
                if (!fs.existsSync(langDir))
                    fs.mkdirSync(langDir, { recursive: true });

                const langPath = path.join(langDir, file);
                let langContent = {};

                if (fs.existsSync(langPath)) {
                    const content = fs.readFileSync(langPath, 'utf8');
                    backups.set(langPath, content);
                    langContent = JSON.parse(content);
                }

                const syncedContent = await fillMissingInteractive(
                    refContent,
                    langContent,
                    lang,
                    file,
                    ask,
                    REFERENCE_LANG,
                );

                fs.writeFileSync(
                    langPath,
                    JSON.stringify(syncedContent, null, 2) + '\n',
                    'utf8',
                );
                console.log(
                    `${LOG_PREFIX} ✅ Sincronizado: ${COLORS.green}${lang}/${file}${COLORS.reset}`,
                );
            }
        }

        console.log(
            `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.yellow}⚠ Los cambios se han aplicado temporalmente.${COLORS.reset}`,
        );
        const confirm = await ask(
            `${COLORS.bright}${COLORS.cyan}¿Deseas confirmar los cambios? (s/n/c):${COLORS.reset} `,
        );

        if (
            confirm.toLowerCase() === 'c' ||
            confirm.toLowerCase() === 'cancelar'
        ) {
            console.log(
                `\n${LOG_PREFIX} ${COLORS.red}Operación cancelada. Revirtiendo cambios...${COLORS.reset}`,
            );
            for (const [filePath, content] of backups) {
                fs.writeFileSync(filePath, content, 'utf8');
            }
            console.log(
                `${LOG_PREFIX} ${COLORS.green}✅ Cambios revertidos con éxito.${COLORS.reset}\n`,
            );
        } else if (confirm.toLowerCase() !== 's') {
            console.log(
                `\n${LOG_PREFIX} ${COLORS.red}Revirtiendo cambios...${COLORS.reset}`,
            );
            for (const [filePath, content] of backups) {
                fs.writeFileSync(filePath, content, 'utf8');
            }
            console.log(
                `${LOG_PREFIX} ${COLORS.green}✅ Cambios revertidos con éxito.${COLORS.reset}\n`,
            );
        } else {
            console.log(
                `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.green}✨ ¡Sincronización finalizada y confirmada!${COLORS.reset}\n`,
            );
        }
    } catch (error) {
        console.error(
            `\n${LOG_PREFIX} ${COLORS.red}Error durante la sincronización: ${error.message}${COLORS.reset}`,
        );
        if (backups.size > 0) {
            console.log(`${LOG_PREFIX} Intentando revertir cambios...`);
            for (const [filePath, content] of backups) {
                fs.writeFileSync(filePath, content, 'utf8');
            }
        }
    } finally {
        close();
    }
}

if (process.argv[1].endsWith('sync-keys.js')) {
    syncLocales();
}
