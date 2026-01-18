import fs from 'fs';
import path from 'path';
import {COLORS, createQuestionAsker, getLogPrefix, loadSharedConfig, LOCALES_DIR, sortObject,} from './utils.js';

const LOG_PREFIX = getLogPrefix('sort');

/**
 * Sorts locale JSON files by their keys and confirms changes with the user.
 */
export async function sortLocales() {
    const {LANGUAGES} = await loadSharedConfig();
    const {ask, close} = createQuestionAsker();
    const backups = new Map();
    try {
        LANGUAGES.forEach((lang) => {
            const langDir = path.join(LOCALES_DIR, lang);
            if (!fs.existsSync(langDir) || !fs.statSync(langDir).isDirectory())
                return;

            const files = fs.readdirSync(langDir);

            files.forEach((file) => {
                if (!file.endsWith('.json')) return;

                const filePath = path.join(langDir, file);
                const content = fs.readFileSync(filePath, 'utf8');
                backups.set(filePath, content);

                const sortedContent = sortObject(JSON.parse(content));

                fs.writeFileSync(
                    filePath,
                    JSON.stringify(sortedContent, null, 2) + '\n',
                    'utf8',
                );
                console.log(
                    `${LOG_PREFIX} ✅ Ordenado: ${COLORS.green}${lang}/${file}${COLORS.reset}`,
                );
            });
        });

        console.log(
            `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.yellow}⚠ Los archivos han sido ordenados temporalmente.${COLORS.reset}`,
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
                `\n${LOG_PREFIX} ${COLORS.bright}${COLORS.green}✨ ¡Ordenación finalizada y confirmada!${COLORS.reset}\n`,
            );
        }
    } catch (error) {
        console.error(
            `\n${LOG_PREFIX} ${COLORS.red}Error durante la ordenación: ${error.message}${COLORS.reset}`,
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

if (process.argv[1].endsWith('sort-keys.js')) {
    sortLocales();
}
