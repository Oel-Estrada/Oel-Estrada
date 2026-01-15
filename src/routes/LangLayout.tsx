import { type JSX, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router";
import { DEFAULT_LANGUAGE, isSupportedLanguage } from "@/i18n/shared";

/**
 * Managing the language layout of the application.
 * It adjusts the language configuration based on URL parameters and ensures fallback behavior
 * for unsupported or missing language settings.
 *
 * @return {JSX.Element|null} Returns the Outlet component to render nested routes
 *                            if the language parameter is valid and supported,
 *                            otherwise returns null.
 */
function LangLayout(): JSX.Element | null {
    const { lang } = useParams();
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    /**
     * Change the language in i18n when the lang parameter changes.
     */
    useEffect(() => {
        if (lang && isSupportedLanguage(lang)) {
            if (i18n.language !== lang) {
                void i18n.changeLanguage(lang);
            }
        } else {
            void navigate(`/${DEFAULT_LANGUAGE}`, { replace: true });
        }
    }, [lang, i18n, navigate]);

    if (!lang || !isSupportedLanguage(lang)) {
        return null;
    }

    return (
        <Outlet />
    );
}

export default LangLayout;