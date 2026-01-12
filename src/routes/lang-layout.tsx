import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router";
import { DEFAULT_LANGUAGE, isSupportedLanguage } from "@/i18n/shared";

/**
 * LangLayout component to handle language changes based on URL parameters.
 */
export default function LangLayout() {
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
