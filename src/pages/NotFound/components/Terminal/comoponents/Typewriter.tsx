import React, { useEffect, useState } from 'react';

import { animate } from 'motion';
import type { JSX } from 'react';

import Cursor from '@/pages/NotFound/components/Terminal/comoponents/Cursor.tsx';

interface TypewriterProps {
    text: string;
    duration?: number;
}

/**
 * Typewriter component to display text with a typewriter animation effect.
 * @param {TypewriterProps} props - The component props.
 *
 * @param {string} [props.text='Hola mundo'] - The text to display.
 * @param {number} [props.duration=3] - The duration of the animation in seconds.
 *
 * @returns {JSX.Element} The Typewriter component.
 */
function Typewriter({ text, duration = 0.8 }: TypewriterProps): JSX.Element {
    const [count, setCount] = useState(0);

    /**
     * Effect to animate the typewriter effect whenever the text or duration changes.
     */
    useEffect(() => {
        setCount(0);

        const controls = animate(0, text.length, {
            duration,
            ease: 'linear',
            onUpdate: (latest: number) => setCount(Math.floor(latest)),
        });

        return () => controls.stop();
    }, [text, duration]);

    return (
        <>
            {text.slice(0, count)}
            {count !== text.length && <Cursor />}
        </>
    );
}

export default Typewriter;
