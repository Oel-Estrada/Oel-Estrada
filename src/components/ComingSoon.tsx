import { useTranslation } from 'react-i18next';
import './ComingSoon.css';
 
function ComingSoon() {
    const { t } = useTranslation(['comingSoon', 'common']);

    return (
        <div className="coming-soon-container">
            <div className="bg-gradient"/>
            <header className="coming-soon-header">
                <h1>{t('common:name')}</h1>
                <h2>{t('common:specialty')}</h2>
            </header>
            <main className="coming-soon-content">
                <p>{t('working')}</p>
                <p>{t('portfolio')}</p>
            </main>
            <footer className="coming-soon-footer">
                <p>{t('common:footer.rights')}</p>
            </footer>
        </div>
    );
}

export default ComingSoon;
