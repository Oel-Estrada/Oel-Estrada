import { type FC, type JSX, type SVGProps } from 'react';

import { Box, Layers, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { HeroInfoBadge } from '@/pages/Home/components/HomeHeroSection/components/HeroInfoBadge/HeroInfoBadge.tsx';

const infoBadges: {
    Icon: FC<SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
    className: string;
}[] = [
    {
        Icon: Zap,
        label: 'hero.performanceLabel',
        value: 'hero.performanceScoreValue',
        className: 'absolute top-10 right-0 animate-bounce',
    },
    {
        Icon: Layers,
        label: 'hero.structureLabel',
        value: 'hero.cleanCodeLabel',
        className: 'absolute bottom-10 -left-5',
    },
];

/**
 * Represents the image section of the HomePage Hero component.
 *
 * Used by {@link HomeHeroSection} to display an image section with a circular avatar and information badges.
 *
 * @return {JSX.Element} The JSX structure of the image section of the HomePage Hero component.
 */
function HomeHeroImageSection(): JSX.Element {
    const { t } = useTranslation('home');

    return (
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
            {infoBadges.map((badge) => (
                <HeroInfoBadge
                    key={badge.label}
                    Icon={badge.Icon}
                    label={t(badge.label)}
                    value={t(badge.value)}
                    className={badge.className}
                />
            ))}
        </div>
    );
}

export default HomeHeroImageSection;
