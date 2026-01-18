import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router';

/**
 * RootRedirect component that redirects to the default language route.
 */
export default function RootRedirect() {
    const { i18n } = useTranslation();

    return <Navigate to={`/${i18n.language}`} replace />;
}
