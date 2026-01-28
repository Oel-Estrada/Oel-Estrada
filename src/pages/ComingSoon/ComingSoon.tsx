import {
    AtSign,
    Download,
    MessageCircleQuestionMark,
    Phone,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './ComingSoon.css';
import Badge from '@/components/Badge/Badge.tsx';
import JavaScriptLogo from '@/components/icons/JavaScriptLogo.tsx';
import NextJsLogo from '@/components/icons/NextJsLogo.tsx';
import ReactLogo from '@/components/icons/ReactLogo.tsx';
import TypeScriptLogo from '@/components/icons/TypeScriptLogo.tsx';
import WhatsAppLogo from '@/components/icons/WhatsAppLogo.tsx';
import Logo from '@/components/Logo/Logo.tsx';
import MetaTags from '@/components/MetaTags.tsx';
import { Button } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';

import type { ComponentType, JSX, SVGProps } from 'react';

interface logos {
    id: number;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    className?: string;
}

const logos: logos[] = [
    {
        id: 0,
        Icon: TypeScriptLogo,
        className:
            'w-24 h-24 bottom-[20%] right-[10%] opacity-5 floating-icon ',
    },
    {
        id: 1,
        Icon: JavaScriptLogo,
        className:
            'w-32 h-32 top-[25%] right-[20%] opacity-5 floating-icon-delayed ',
    },
    {
        id: 2,
        Icon: ReactLogo,
        className:
            'w-32 h-32 bottom-[30%] left-[15%] opacity-5 floating-icon-slow ',
    },
    {
        id: 3,
        Icon: NextJsLogo,
        className: 'w-24 h-24 top-[15%] left-[10%] opacity-50 floating-icon ',
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
        <div className="min-w-xs">
            <MetaTags
                title={t('comingSoon:meta.title')}
                description={t('comingSoon:meta.description')}
                keywords={t('comingSoon:meta.keywords')}
            />
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 primary-mix-gradient" />
                {logos.map(({ Icon, id, className }) => (
                    <Icon key={id} className={cn('absolute', className)} />
                ))}
            </div>
            <nav className="relative z-10 w-full px-6 py-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex">
                        <Logo />
                    </div>
                    <Badge
                        text={t('common:status.availableForProjects')}
                        showPing
                        variant="primary"
                        className="hidden sm:flex leading-normal"
                    />
                </div>
            </nav>
            <main className="relative z-10 grow flex flex-col items-center justify-center px-6 py-12 gap-12">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden border border-primary/20 relative">
                            <div className="absolute inset-y-0 left-0 bg-primary progress-glow w-4/5" />
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.4em] text-primary uppercase">
                            Portfolio v2.0 In Progress
                        </span>
                    </div>
                </div>
                <div className="space-y-6 text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                        Refining the <br />
                        <span className="text-transparent animate-shine">
                            Digital Experience
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        Frontend Engineer specializing in high-performance
                        architectures.{' '}
                        <span className="text-text-muted">
                            Expert in building scalable e-learning platforms and
                            AI-driven interfaces.
                        </span>
                    </p>
                </div>
                <div className="flex flex-col items-center gap-12 w-full">
                    <Button
                        size="auto"
                        className="w-full sm:w-fit text-sm md:text-lg font-bold uppercase tracking-widest md:tracking-[0.15em] group relative py-5 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_color-mix(in_srgb,var(--primary)_40%,transparent)]"
                    >
                        <Download className="size-6" />
                        Скачать резюме
                        <div className="absolute inset-0 rounded-full bg-primary-foreground/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500" />
                    </Button>
                    <div className="bg-surface/60 backdrop-blur-lg border border-primary/15 w-full max-w-3xl rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <MessageCircleQuestionMark className="size-24" />
                        </div>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-5 md:m-10 text-center">
                            Direct Connectivity
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
                            <div className="space-y-4 sm:space-y-8 md:col-span-8">
                                <div className="flex items-center gap-5">
                                    <div className="hidden sm:flex size-14 rounded-2xl bg-primary/10 border border-primary/30 items-center justify-center text-primary">
                                        <AtSign />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-muted uppercase font-black tracking-widest mb-1">
                                            Email Address
                                        </p>
                                        <a
                                            className="text-sm md:text-lg font-mono text-text-primary hover:text-primary transition-colors"
                                            href="mailto:oelestradacampos@gmail.com"
                                        >
                                            oelestradacampos@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="hidden sm:flex size-14 rounded-2xl bg-primary/10 border border-primary/30 items-center justify-center text-primary">
                                        <Phone />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-muted uppercase font-black tracking-widest mb-1">
                                            Direct Line
                                        </p>
                                        <a
                                            className="text-sm md:text-lg font-mono text-text-primary hover:text-primary transition-colors"
                                            href="tel:+79955556081"
                                        >
                                            +7 995 555 60 81
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-7 md:col-span-4">
                                <p className="text-[10px] text-text-muted uppercase font-black tracking-widest mb-6">
                                    Messaging Platforms
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        className="flex items-center justify-center size-14 rounded-2xl bg-surface border border-border hover:border-primary hover:text-primary transition-all group/social"
                                        href="./"
                                    >
                                        <WhatsAppLogo
                                            color="currentColor"
                                            className="size-7 fill-current transition-transform group-hover/social:scale-110"
                                        />
                                    </a>
                                    <a
                                        className="flex items-center justify-center size-14 rounded-2xl bg-surface border border-border hover:border-primary hover:text-primary transition-all group/social"
                                        href="./"
                                    >
                                        <svg
                                            className="size-7 fill-current transition-transform group-hover/social:scale-110"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.441-.168.575-.504.767-.714.786-.456.043-.799-.299-1.24-.587-.69-.452-1.08-.732-1.748-1.171-.773-.51-.272-.791.168-1.25.115-.119 2.112-1.936 2.151-2.102.005-.021.009-.098-.037-.139-.046-.041-.113-.027-.162-.016-.07.016-1.18.749-3.328 2.197-.314.216-.599.322-.855.316-.281-.006-.823-.153-1.226-.284-.493-.161-.886-.246-.852-.52.017-.143.214-.289.59-.44 2.301-1.001 3.835-1.662 4.603-1.983 2.172-.911 2.623-1.069 2.917-1.074.064-.001.21.015.304.092.079.065.101.152.109.221.008.069.01.143-.002.217z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="relative z-10 w-full px-6 py-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border pt-8">
                    <div className="text-text-muted text-[10px] font-mono tracking-widest uppercase flex items-center gap-2">
                        <span className="size-1.5 bg-primary rounded-full animate-pulse" />
                        System.Status(Available_for_Hire)
                    </div>
                    <div className="text-text-muted text-[10px] font-mono tracking-widest uppercase opacity-70">
                        {t('common:footer.rights')}
                    </div>
                </div>
            </footer>
            <div className="fixed top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 size-150 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="fixed bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
}

export default ComingSoon;
