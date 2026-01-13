import { useTranslation } from 'react-i18next';
import './ComingSoon.css';
import { MetaTags } from "@/components/MetaTags.tsx";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button/Button.tsx";

function ComingSoon() {
    const { t } = useTranslation(['comingSoon', 'common']);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen w-full p-8 text-center relative overflow-hidden bg-background text-text-primary">
            <MetaTags
                title={t('comingSoon:meta.title')}
                description={t('comingSoon:meta.description')}
                keywords={t('comingSoon:meta.keywords')}
            />
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 20% 30%, var(--primary) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--accent) 0%, transparent 40%)'
                }}
            />

            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h1 className="text-[clamp(3rem,8vw,5rem)] mb-2 font-heading font-extrabold tracking-tight animate-shine">
                    {t('common:name')}
                </h1>
                <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-sans text-text-secondary mb-8 tracking-widest uppercase">
                    {t('common:specialty')}
                </h2>
            </motion.header>

            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 flex flex-col gap-6"
            >
                <div className="card max-w-2xl mx-auto">
                    <p className="text-xl text-text-secondary">
                        {t('comingSoon:working')}
                    </p>
                    <p className="text-xl text-text-secondary mt-4">
                        {t('comingSoon:portfolio')}
                    </p>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                    <Button asChild size="lg" className="shadow-lg hover:shadow-primary/20 transition-shadow">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('common:contact', 'Contactar')}
                        </motion.a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('common:projects', 'Ver Proyectos')}
                        </motion.a>
                    </Button>
                </div>
            </motion.main>

            <footer className="relative z-10 mt-16 text-text-secondary text-sm">
                <p>{t('common:footer.rights')}</p>
            </footer>
        </div>
    );
}

export default ComingSoon;
