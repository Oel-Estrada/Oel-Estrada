import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { ENVIRONMENTS } from '@/env.ts';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './shared';

/**
 * Initialize i18next for client-side internationalization.
 */
void i18n
    // load translation using http -> see /public/locales
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: DEFAULT_LANGUAGE,
        supportedLngs: SUPPORTED_LANGUAGES,
        ns: ['common'],
        debug: ENVIRONMENTS.isDev,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: [
                'path',
                'cookie',
                'localStorage',
                'sessionStorage',
                'navigator',
            ],
            lookupFromPathIndex: 0,
            caches: ['cookie', 'localStorage'],
        },
    });

export default i18n;
