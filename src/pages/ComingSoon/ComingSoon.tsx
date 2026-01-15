import { useTranslation } from 'react-i18next';
import './ComingSoon.css';
import MetaTags from "@/components/MetaTags.tsx";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { contactInfo } from "@/lib/constants.ts";
import ContactButton from "./components/ContactButton.tsx";
import type { ComponentType, JSX, SVGProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/Button/buttonVariants.tsx";

interface ContactButton {
    id: number,
    icon: { icon: ComponentType<SVGProps<SVGSVGElement>>; className?: string };
    label: string;
    href: string;
    target?: string;
    className?: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
}

const contactButtons: ContactButton[] = [
    {
        id: 0,
        icon: { icon: Mail },
        label: 'common:email',
        href: `mailto:${contactInfo.email}`,
        className: 'shadow-lg hover:shadow-primary/20 transition-shadow',
    },
    {
        id: 1,
        icon: { icon: Send, className: 'text-[#24A1DE]' },
        label: 'common:telegram',
        href: contactInfo.telegram,
        target: '_blank',
        className: 'hover:bg-surface transition-colors',
        variant: 'outline',
    },
    {
        id: 2,
        icon: { icon: MessageCircle, className: 'text-[#25D366]' },
        label: 'common:whatsapp',
        href: contactInfo.whatsapp,
        target: '_blank',
        className: 'hover:bg-surface transition-colors',
        variant: 'outline',
    },
];

/**
 * "Coming Soon" page.
 * The page includes a header, animated elements, content, contact buttons,
 * and a footer, styled to fit a modern coming soon template.
 *
 * @return {JSX.Element} A JSX element representing the "Coming Soon" page.
 */
function ComingSoon(): JSX.Element {
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

                <div className="flex flex-col flex-wrap justify-center gap-4 mt-4 md:flex-row">
                    {contactButtons.map((button) => (
                        <ContactButton
                            key={button.id}
                            icon={button.icon}
                            label={t(button.label)}
                            href={button.href}
                            target={button.target}
                            variant={button.variant}
                            className="shadow-lg hover:shadow-primary/20 transition-shadow"
                        />
                    ))}
                </div>
            </motion.main>

            <footer className="relative z-10 mt-16 text-text-secondary text-sm">
                <p>{t('common:footer.rights')}</p>
            </footer>
        </div>
    );
}

export default ComingSoon;
