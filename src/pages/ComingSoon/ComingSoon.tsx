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
        </>
    );
}

export default ComingSoon;
