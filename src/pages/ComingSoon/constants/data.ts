import JavaScriptLogo from '@/components/icons/JavaScriptLogo.tsx';
import NextJsLogo from '@/components/icons/NextJsLogo.tsx';
import ReactLogo from '@/components/icons/ReactLogo.tsx';
import TypeScriptLogo from '@/components/icons/TypeScriptLogo.tsx';

import type { ComponentType, SVGProps } from 'react';

interface logos {
    id: number;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    className?: string;
}

export const logos: logos[] = [
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
