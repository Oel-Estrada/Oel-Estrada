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
import {
    LANGUAGES,
    SUPPORTED_LANGUAGES,
    type SupportedLanguage,
} from '@/i18n/shared.ts';

import type { JSX } from 'react';

/**
 * Renders a language selection dropdown menu.
 *
 * Used by {@link Navbar}
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional additional CSS class names to apply to the component.
 *
 * @return {JSX.Element} A dropdown menu component for selecting the application's language.
 */
function SelectLanguage({
    className = '',
}: {
    className?: string;
}): JSX.Element {
    const { i18n, t } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    /**
     * Handles the language change event.
     * @param {string} newLang - The selected language code.
     */
    const handleLanguageChange = useCallback(
        async (newLang: SupportedLanguage) => {
            if (!SUPPORTED_LANGUAGES.includes(newLang)) return;

            if (lang && lang !== newLang) {
                const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
                await navigate(newPath, { replace: true });
            }
        },
        [lang, pathname, navigate],
    );

    return (
        <Select value={i18n.language} onValueChange={handleLanguageChange}>
            <SelectTrigger
                aria-label={t('selectLanguage')}
                className={`${className} hover:bg-primary/10 border-none shadow-none dark:bg-transparent p-2 [&>svg:last-child]:hidden text-text-primary hover:text-primary transition-colors`}
            >
                <Languages className="size-5" />
            </SelectTrigger>
            <SelectContent
                className="[&_svg]:hidden"
                position="popper"
                side="bottom"
                align="start"
            >
                {LANGUAGES.map(({ code, label }) => (
                    <SelectItem
                        key={code}
                        value={code}
                        className="text-sm font-medium hover:text-primary transition-colors"
                        data-state={i18n.language === code ? 'selected' : ''}
                    >
                        <span className="truncate capitalize">{label}</span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default SelectLanguage;
