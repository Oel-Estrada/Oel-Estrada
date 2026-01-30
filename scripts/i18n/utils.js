/* eslint-disable no-undef */
import path from 'path';
import readline from 'readline';

export const COLORS = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
};

export const LOCALES_DIR = path.join(process.cwd(), 'public', 'locales');

export const getLogPrefix = (command) =>
    `${COLORS.bright}${COLORS.blue}[i18n-${command}]${COLORS.reset}`;

/**
 * Creates a question asker using readline interface.
 */
export const createQuestionAsker = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const ask = (query) =>
        new Promise((resolve) => rl.question(query, resolve));
    return { ask, close: () => rl.close() };
};

/**
 * Loads shared i18n configuration.
 */
export const loadSharedConfig = async () => {
    const { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } =
        await import('../../src/i18n/shared.ts');
    return { LANGUAGES: SUPPORTED_LANGUAGES, REFERENCE_LANG: DEFAULT_LANGUAGE };
};

/**
 * Gets all deep keys from an object.
 */
export function getDeepKeys(obj, prefix = '') {
    return Object.keys(obj).reduce((res, el) => {
        if (Array.isArray(obj[el])) {
            return res;
        } else if (typeof obj[el] === 'object' && obj[el] !== null) {
            return [...res, ...getDeepKeys(obj[el], prefix + el + '.')];
        }
        return [...res, prefix + el];
    }, []);
}

/**
 * Sorts an object recursively by its keys.
 */
export function sortObject(obj) {
    if (Array.isArray(obj)) return obj;
    if (typeof obj !== 'object' || obj === null) return obj;

    return Object.keys(obj)
        .sort()
        .reduce((res, key) => {
            res[key] = sortObject(obj[key]);
            return res;
        }, {});
}
