import { useTranslation } from 'react-i18next';
import './ComingSoon.css';
import { MetaTags } from "@/components/MetaTags.tsx";

function ComingSoon() {
    const { t } = useTranslation(['comingSoon', 'common']);

    return (
        <div className="coming-soon-container">
            <MetaTags
                title={t('comingSoon:meta.title')}
                description={t('comingSoon:meta.description')}
                keywords={t('comingSoon:meta.keywords')}
            />
            <div className="bg-gradient" />
            <header className="coming-soon-header">
                <h1>{t('common:name')}</h1>
                <h2>{t('common:specialty')}</h2>
            </header>
            <main className="coming-soon-content">
                <p>{t('comingSoon:working')}</p>
                <p>{t('comingSoon:portfolio')}</p>
            </main>
            <footer className="coming-soon-footer">
                <p>{t('common:footer.rights')}</p>
            </footer>
        </div>
    );
}

export default ComingSoon;
