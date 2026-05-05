import type { JSX } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Cursor from '@/pages/NotFound/components/Terminal/components/Cursor.tsx';
import Typewriter from '@/pages/NotFound/components/Terminal/components/Typewriter.tsx';

/**
 * Terminal component to display a styled terminal-like box with commands and messages.
 *
 * @returns {JSX.Element} The Terminal component.
 */
function Terminal(): JSX.Element {
    const { t } = useTranslation('notFound');

    return (
        <div className="w-full max-w-lg bg-(--surface) rounded-lg overflow-hidden border border-(--divider) mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_color-mix(in_srgb,var(--primary)_10%,transparent)]">
            <div className="px-4 py-2 border-b border-(--divider) flex items-center justify-between bg-[color:color-mix(in srgb, var(--surface) 92%, var(--overlay) 8%)]">
                <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500"></div>
                    <div className="size-2.5 rounded-full bg-yellow-500"></div>
                    <div className="size-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">
                    {t('notFound:terminal.header')}
                </span>
                <div className="w-10"></div>
            </div>
            <span className="font-mono p-6 text-left text-sm md:text-base space-y-2 flex flex-col gap-1 h-48 overflow-y-auto">
                <span>
                    <Trans
                        i18nKey="notFound:terminal.prompt"
                        components={{
                            1: <span className="text-primary" />,
                            2: <span className="text-text-secondary" />,
                            3: <span className="text-primary font-bold" />,
                        }}
                    />{' '}
                    <span className="text-warning">✗</span>{' '}
                    <span className="text-primary">
                        <Typewriter text={t('notFound:terminal.findCommand')} />
                    </span>
                </span>
                <span className="text-error">
                    <Typewriter text={t('notFound:terminal.errorEntryPoint')} />
                </span>
                <span>
                    <Trans
                        i18nKey="notFound:terminal.prompt"
                        components={{
                            1: <span className="text-primary" />,
                            2: <span className="text-text-secondary" />,
                            3: <span className="text-primary font-bold" />,
                        }}
                    />{' '}
                    <Cursor />
                </span>
            </span>
        </div>
    );
}

export default Terminal;
