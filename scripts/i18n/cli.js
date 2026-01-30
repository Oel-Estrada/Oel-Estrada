#!/usr/bin/env node
/* eslint-disable no-undef */
import { checkMissingKeys } from './check-keys.js';
import { extractKeys } from './extract-keys.js';
import { sortLocales } from './sort-keys.js';
import { syncLocales } from './sync-keys.js';
import { COLORS, createQuestionAsker } from './utils.js';

const command = process.argv[2];

const help = () => {
    console.log(`
${COLORS.bright}${COLORS.blue}i18n CLI${COLORS.reset}
Usage: npm run i18n <command>

Commands:
  ${COLORS.cyan}check${COLORS.reset}    Busca claves faltantes o extra entre los idiomas.
  ${COLORS.cyan}sort${COLORS.reset}     Ordena alfabéticamente las claves en todos los archivos JSON.
  ${COLORS.cyan}sync${COLORS.reset}     Sincroniza claves faltantes desde el idioma de referencia (interactivo).
  ${COLORS.cyan}extract${COLORS.reset}  Extrae claves seleccionadas a un nuevo archivo (interactivo).
  ${COLORS.cyan}help${COLORS.reset}     Muestra este mensaje de ayuda.
`);
};

async function interactiveMenu() {
    const { ask, close } = createQuestionAsker();
    console.log(
        `\n${COLORS.bright}${COLORS.blue}--- i18n Interactive Menu ---${COLORS.reset}`,
    );
    console.log(`${COLORS.cyan}1.${COLORS.reset} Check keys`);
    console.log(`${COLORS.cyan}2.${COLORS.reset} Sort keys`);
    console.log(`${COLORS.cyan}3.${COLORS.reset} Sync keys`);
    console.log(`${COLORS.cyan}4.${COLORS.reset} Extract keys`);
    console.log(`${COLORS.cyan}5.${COLORS.reset} Help`);
    console.log(`${COLORS.cyan}0.${COLORS.reset} Exit`);

    const choice = await ask(
        `\n${COLORS.bright}Selecciona una opción:${COLORS.reset} `,
    );

    switch (choice.trim()) {
        case '1':
            close();
            await checkMissingKeys();
            break;
        case '2':
            close();
            await sortLocales();
            break;
        case '3':
            close();
            await syncLocales();
            break;
        case '4':
            close();
            await extractKeys();
            break;
        case '5':
            close();
            help();
            break;
        case '0':
        case 'q':
        case 'exit':
            console.log('Adiós!');
            close();
            break;
        default:
            console.log(`${COLORS.red}Opción no válida.${COLORS.reset}`);
            close();
            await interactiveMenu();
            break;
    }
}

async function main() {
    switch (command) {
        case 'check':
            await checkMissingKeys();
            break;
        case 'sort':
            await sortLocales();
            break;
        case 'sync':
            await syncLocales();
            break;
        case 'extract':
            await extractKeys();
            break;
        case 'help':
        case '--help':
        case '-h':
            help();
            break;
        default:
            if (command) {
                console.error(
                    `${COLORS.red}Error: Comando desconocido "${command}"${COLORS.reset}`,
                );
                help();
                process.exit(1);
            }
            await interactiveMenu();
            break;
    }
}

main().catch((err) => {
    console.error(`\n${COLORS.red}Error inesperado:${COLORS.reset}`, err);
    process.exit(1);
});
