import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const SUPPORTED_LANGUAGES = ['es', 'en', 'ru'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

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
        fallbackLng: SUPPORTED_LANGUAGES[0],
        supportedLngs: SUPPORTED_LANGUAGES,
        debug: true,

        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;