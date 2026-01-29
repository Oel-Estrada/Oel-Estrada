import type { Variants } from 'motion/react';

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: (custom: { idx: number; reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom.reduced ? 0 : custom.idx * 0.14 + 0.08,
        },
    }),
};

export const progressVariants: Variants = {
    hidden: { scaleX: 0 },
    show: {
        scaleX: 1,
        transition: {
            duration: 10.0,
            ease: 'easeOut',
        },
    },
};
