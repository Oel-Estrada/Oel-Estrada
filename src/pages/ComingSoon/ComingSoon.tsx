import { useTranslation } from 'react-i18next';

import './ComingSoon.css';
import Badge from '@/components/Badge/Badge.tsx';
import JavaScriptLogo from '@/components/icons/JavaScriptLogo.tsx';
import NextJsLogo from '@/components/icons/NextJsLogo.tsx';
import ReactLogo from '@/components/icons/ReactLogo.tsx';
import TypeScriptLogo from '@/components/icons/TypeScriptLogo.tsx';
import Logo from '@/components/Logo/Logo.tsx';
import MetaTags from '@/components/MetaTags.tsx';
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
        <>
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
            <main className="relative z-10 grow flex flex-col items-center justify-center px-6 py-12">
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
        </>
    );
}

export default ComingSoon;
