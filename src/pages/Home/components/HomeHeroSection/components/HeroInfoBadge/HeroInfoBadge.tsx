import React from 'react';

import type { ComponentType, SVGProps } from 'react';

import { cn } from '@/lib/utils.ts';

interface HeroInfoBadgeProps {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: React.ReactNode;
    value: React.ReactNode;
    className?: string;
}

export function HeroInfoBadge({
    Icon,
    label,
    value,
    className = '',
}: HeroInfoBadgeProps) {
    return (
        <div
            className={cn(
                'glass px-4 py-2 rounded-xl flex items-center gap-3',
                className,
            )}
        >
            <Icon className="text-primary" />
            <div className="flex flex-col">
                <span className="text-[10px] text-text-secondary font-bold uppercase">
                    {label}
                </span>
                <span className="text-sm font-black uppercase">{value}</span>
            </div>
        </div>
    );
}
