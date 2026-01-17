import { Languages } from 'lucide-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select.tsx';
import type { SupportedLanguage } from '@/i18n/shared.ts';
import { SUPPORTED_LANGUAGES } from '@/i18n/shared.ts';

import type { JSX } from 'react';

/**
 * Renders a language selection dropdown menu.
 *
 * Used by {@link Navbar}
 *
 * @return {JSX.Element} A dropdown menu component for selecting the application's language.
 */
function SelectLanguage(): JSX.Element {
    const { i18n, t } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    /**
     * Handles the language change event.
     * @param {string} newLang - The selected language code.
     */
    const handleLanguageChange = useCallback(
        async (newLang: SupportedLanguage) => {
            if (!SUPPORTED_LANGUAGES.includes(newLang)) return;

            if (lang && lang !== newLang) {
                const newPath = location.pathname.replace(
                    `/${lang}`,
                    `/${newLang}`,
                );
                await navigate(newPath, { replace: true });
            }
        },
        [lang, location.pathname, navigate],
    );

    return (
        <Select value={i18n.language} onValueChange={handleLanguageChange}>
            <SelectTrigger
                aria-label={t('selectLanguage')}
                className="hover:bg-accent w-full border-none shadow-none dark:bg-transparent pr-2 [&>svg:last-child]:hidden"
            >
                <Languages className="text-primary hover:text-primary w-36 h-36" />
            </SelectTrigger>
            <SelectContent
                className="[&_svg]:hidden w-fit"
                position="popper"
                side="bottom"
                align="start"
                sideOffset={6}
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <SelectItem
                        key={lang}
                        value={lang}
                        className="text-sm font-medium hover:text-primary transition-colors"
                        data-state={i18n.language === lang ? 'selected' : ''}
                    >
                        <span className="truncate uppercase">{lang}</span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default SelectLanguage;
