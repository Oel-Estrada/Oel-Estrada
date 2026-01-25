import { Download } from 'lucide-react';
import React, { type JSX } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Badge from '@/components/Badge/Badge.tsx';
import NextJsLogo from '@/components/icons/NextJsLogo.tsx';
import ReactLogo from '@/components/icons/ReactLogo.tsx';
import TypeScriptLogo from '@/components/icons/TypeScriptLogo.tsx';
import { Button } from '@/components/ui/button.tsx';

import TechBadge from '../TechBadge/TechBadge.tsx';

const techBadges: {
    label: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[] = [
    { label: 'Next.js', Icon: NextJsLogo },
    { label: 'React', Icon: ReactLogo },
    { label: 'TypeScript', Icon: TypeScriptLogo },
];

/**
 * Represents the main section of the HomePage Hero component.
 *
 * Used by {@link HomeHeroSection} to display the main section of the HomePage Hero component, including a title, subtitle, call-to-action buttons, and tech badges.
 *
 *  @return {JSX.Element} The JSX structure of the main section of the HomePage Hero component.
 */
function HomeHeroMainSection(): JSX.Element {
    const { t } = useTranslation(['home', 'common']);

    return (
        <>
            <Badge
                text={t('common:status.availableForProjects')}
                showPing
                variant="primary"
            />
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                    <Trans
                        i18nKey="home:hero.title"
                        components={{
                            1: <span className="text-primary" />,
                        }}
                    />
                </h1>
                <p className="text-lg md:text-xl text-text-secondary max-w-xl font-light leading-relaxed">
                    <Trans
                        i18nKey="home:hero.subtitle"
                        components={{
                            1: <span className="text-foreground font-medium" />,
                        }}
                    />
                </p>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row gap-4">
                <Button className="min-w-40 cursor-pointer border rounded-full h-14 px-8 text-base font-bold tracking-tighter">
                    {t('home:hero.ctaPrimary')}
                </Button>
                <Button
                    variant="outline"
                    className="min-w-40 cursor-pointer border rounded-full h-14 has-[>svg]:px-8 text-base font-bold tracking-tighter"
                >
                    <Download className="mr-2 size-6" />
                    {t('home:hero.downloadCv')}
                </Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 opacity-60">
                {techBadges.map((badge) => (
                    <TechBadge key={badge.label} {...badge} />
                ))}
            </div>
        </>
    );
}

export default HomeHeroMainSection;
