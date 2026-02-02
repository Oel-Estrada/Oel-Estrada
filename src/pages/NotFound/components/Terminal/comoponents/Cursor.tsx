import { motion } from 'motion/react';
import type { JSX } from 'react';

import { cn } from '@/lib/utils.ts';

interface CursorProps {
    className?: string;
    duration?: number;
}

/**
 * Cursor component to display a blinking cursor effect.
 *
 * @param {string} className - Additional CSS classes to apply to the cursor.
 * @param {number} duration - Duration of the blink animation in seconds.
 *
 * @return {JSX.Element} The Cursor component.
 */
function Cursor({ className = '', duration = 0.8 }: CursorProps): JSX.Element {
    return (
        <motion.div
            aria-hidden="true"
            className={cn('bg-text-primary w-3 h-0.5 inline-block', className)}
            animate={{ opacity: [1, 0, 1] }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
            }}
        />
    );
}

export default Cursor;
