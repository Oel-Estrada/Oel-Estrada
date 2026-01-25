import { Box, Download, Layers, Zap } from 'lucide-react';
import React, { type JSX } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Badge from '@/components/Badge/Badge.tsx';
import NextJsLogo from '@/components/icons/NextJsLogo.tsx';
import ReactLogo from '@/components/icons/ReactLogo.tsx';
import TypeScriptLogo from '@/components/icons/TypeScriptLogo.tsx';
import { Button } from '@/components/ui/button.tsx';
import { HeroInfoBadge } from '@/pages/Home/components/HeroInfoBadge/HeroInfoBadge.tsx';

import TechBadge from './components/TechBadge/TechBadge.tsx';

const techBadges: {
    label: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[] = [
    { label: 'Next.js', Icon: NextJsLogo },
    { label: 'React', Icon: ReactLogo },
    { label: 'TypeScript', Icon: TypeScriptLogo },
];

/**
 * Represents the Home component.
 *
 * @return {JSX.Element} The JSX structure for the Home component, displaying the Home Page.
 */
function Home(): JSX.Element {
    const { t } = useTranslation(['home', 'common']);

    return (
        <section className="w-[90%] max-w-6xl mx-auto mt-4">
            <div className="max-w-275 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-8">
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
                                        1: (
                                            <span className="text-foreground font-medium" />
                                        ),
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
                    </div>
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]" />
                            <div className="relative w-72 h-72 border-2 border-primary/30 rounded-full flex items-center justify-center">
                                <div className="w-60 h-60 border border-primary/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 size-4 bg-primary rounded-full shadow-[0_0_15px_var(--primary)]" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                                    <div className="geometric-shape w-full h-full opacity-40" />
                                </div>
                                <div className="absolute inset-4 border border-border/50 rounded-full backdrop-blur-sm flex items-center justify-center">
                                    <Box className="text-primary text-6xl" />
                                </div>
                            </div>
                            <HeroInfoBadge
                                Icon={Zap}
                                label={t('home:hero.performanceLabel')}
                                value={t('home:hero.performanceScoreValue')}
                                className="absolute top-10 right-0 animate-bounce"
                            />
                            <HeroInfoBadge
                                Icon={Layers}
                                label={t('home:hero.structureLabel')}
                                value={t('home:hero.cleanCodeLabel')}
                                className="absolute bottom-10 -left-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
