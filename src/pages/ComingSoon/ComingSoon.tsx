import { useTranslation } from 'react-i18next';
import './ComingSoon.css';
import { MetaTags } from "@/components/MetaTags.tsx";

function ComingSoon() {
    const { t } = useTranslation(['comingSoon', 'common']);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen w-screen p-8 text-center relative overflow-hidden bg-[#0f172a] text-[#f8fafc] font-inter">
            <MetaTags
                title={t('comingSoon:meta.title')}
                description={t('comingSoon:meta.description')}
                keywords={t('comingSoon:meta.keywords')}
                ogType="website"
            />
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 20% 30%, rgba(100, 108, 255, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(97, 218, 251, 0.15) 0%, transparent 40%)'
                }}
            />

            <header className="relative z-10">
                <h1 className="text-[clamp(3rem,8vw,5rem)] mb-2 font-extrabold tracking-tight animate-shine">
                    {t('common:name')}
                </h1>
                <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-normal text-[#94a3b8] mb-8 tracking-[0.1em] uppercase">
                    {t('common:specialty')}
                </h2>
            </header>

            <main className="relative z-10 flex flex-col gap-2">
                <p className="text-xl text-[#cbd5e1] max-w-[600px]">
                    {t('comingSoon:working')}
                </p>
                <p className="text-xl text-[#cbd5e1] max-w-[600px]">
                    {t('comingSoon:portfolio')}
                </p>
            </main>

            <footer className="relative z-10 mt-16 text-[#64748b] text-sm">
                <p>{t('common:footer.rights')}</p>
            </footer>
        </div>
    );
}

export default ComingSoon;
