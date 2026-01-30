/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';

import {
    COLORS,
    getDeepKeys,
    getLogPrefix,
    loadSharedConfig,
    LOCALES_DIR,
} from './utils.js';

const LOG_PREFIX = getLogPrefix('check');

/**
 * Checks for missing translation keys across locale files.
 */
export async function checkMissingKeys() {
    const { LANGUAGES, REFERENCE_LANG } = await loadSharedConfig();
    const referenceFiles = fs.readdirSync(
        path.join(LOCALES_DIR, REFERENCE_LANG),
    );
    let hasMissing = false;

    referenceFiles.forEach((file) => {
        if (!file.endsWith('.json')) return;

        const refPath = path.join(LOCALES_DIR, REFERENCE_LANG, file);
        const refContent = JSON.parse(fs.readFileSync(refPath, 'utf8'));
        const refKeys = getDeepKeys(refContent);

        LANGUAGES.forEach((lang) => {
            if (lang === REFERENCE_LANG) return;

            const langPath = path.join(LOCALES_DIR, lang, file);
            if (!fs.existsSync(langPath)) {
                console.error(
                    `${LOG_PREFIX} ${COLORS.red}✖ [${lang}] El archivo ${COLORS.bright}${file}${COLORS.reset}${COLORS.red} no existe.${COLORS.reset}`,
                );
                hasMissing = true;
                return;
            }

            const langContent = JSON.parse(fs.readFileSync(langPath, 'utf8'));
            const langKeys = getDeepKeys(langContent);

            const missing = refKeys.filter((key) => !langKeys.includes(key));
            const extra = langKeys.filter((key) => !refKeys.includes(key));

            if (missing.length > 0) {
                console.error(
                    `${LOG_PREFIX} ${COLORS.red}✖ [${lang}] Claves faltantes en ${COLORS.bright}${file}${COLORS.reset}${COLORS.red}:${COLORS.reset}`,
                );
                missing.forEach((key) =>
                    console.error(`  ${COLORS.red}- ${key}${COLORS.reset}`),
                );
                hasMissing = true;
            }

            if (extra.length > 0) {
                console.warn(
                    `${LOG_PREFIX} ${COLORS.yellow}⚠ [${lang}] Claves extra en ${COLORS.bright}${file}${COLORS.reset}${COLORS.yellow} (no están en el de referencia):${COLORS.reset}`,
                );
                extra.forEach((key) =>
                    console.warn(`  ${COLORS.yellow}+ ${key}${COLORS.reset}`),
                );
            }
        });
    });

    if (!hasMissing) {
        console.log(
            `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.green}✅ No se encontraron claves faltantes.${COLORS.reset}\n`,
        );
    } else {
        console.error(
            `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.red}❌ Se encontraron errores de sincronización.${COLORS.reset}\n`,
        );
        process.exit(1);
    }
}

if (process.argv[1].endsWith('check-keys.js')) {
    checkMissingKeys();
}
