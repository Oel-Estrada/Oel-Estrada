export const SUPPORTED_LANGUAGES = ["es", "en", "ru"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = SUPPORTED_LANGUAGES[0];

/**
 * Check if a language is supported.
 * @param {string} lang - The language code to check.
 *
 * @returns {lang is SupportedLanguage} True if the language is supported, false otherwise.
 */
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
    return (SUPPORTED_LANGUAGES as readonly string[]).includes(lang);
}
