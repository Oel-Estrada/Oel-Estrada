import { type To, useParams } from 'react-router';

import { buildPath } from '@/constants/routes.ts';
import { DEFAULT_LANGUAGE } from '@/i18n/shared.ts';

type LocalizedPath = (to: To, params?: Record<string, string | number>) => To;

/**
 * Generates a localized path based on the current language parameter in the URL.
 * If the provided path is already absolute (starts with http, mailto:, or tel:), it is returned unchanged.
 *
 * @return {function} The localized path.
 */
export function useLocalizedPath(): LocalizedPath {
    const { lang } = useParams();
    const currentLang = lang ?? DEFAULT_LANGUAGE;

    return (to, params) => {
        const isString = typeof to === 'string';
        const pathname = isString ? to : to.pathname;

        // If the path already seems absolute (starts with http or similar), we don't change it
        if (
            pathname?.startsWith('http') ||
            pathname?.startsWith('mailto:') ||
            pathname?.startsWith('tel:')
        ) {
            return to;
        }

        // Check that the path starts with a lang code, if not, add it
        const cleanPath = pathname?.startsWith('/')
            ? pathname
            : `/${pathname ?? ''}`;
        const localizedTemplate = `/:lang${cleanPath === '/' ? '' : cleanPath}`;

        const localizedPathname = buildPath(localizedTemplate, {
            lang: currentLang,
            ...params,
        });

        if (isString) {
            return localizedPathname;
        }

        return {
            ...to,
            pathname: localizedPathname,
        };
    };
}

export type { LocalizedPath };
