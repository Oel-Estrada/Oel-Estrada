import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button.tsx';

export default function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <Button
                variant="secondary"
                size="icon-lg"
                onClick={toggleTheme}
                className="rounded-full h-14 w-14 shadow-2xl border-2 border-primary/20 backdrop-blur-md"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={resolvedTheme}
                        initial={{ y: 20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                    >
                        {resolvedTheme === 'dark' ? (
                            <Sun className="h-6 w-6 text-yellow-400" />
                        ) : (
                            <Moon className="h-6 w-6 text-primary" />
                        )}
                    </motion.div>
                </AnimatePresence>
            </Button>
        </motion.div>
    );
}
