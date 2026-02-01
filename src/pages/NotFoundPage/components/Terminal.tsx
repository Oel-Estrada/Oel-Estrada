import type { JSX } from 'react';
import { Trans, useTranslation } from 'react-i18next';

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
            <div className="p-6 text-left text-sm md:text-base space-y-2">
                <div className="flex gap-2">
                    <Trans
                        i18nKey="notFound:terminal.findCommand"
                        components={{
                            1: <span className="text-primary" />,
                            2: <span className="text-text-secondary" />,
                            3: <span className="text-primary font-bold" />,
                            4: <span className="text-warning" />,
                            5: <span className="text-text-primary" />,
                        }}
                    />
                </div>
                <div className="text-error">
                    {t('notFound:terminal.errorEntryPoint')}
                </div>
                <div className="flex gap-2 items-center">
                    <Trans
                        i18nKey="notFound:terminal.goBackCommand"
                        components={{
                            1: <span className="text-primary" />,
                            2: <span className="text-text-secondary" />,
                            3: <span className="text-text-primary" />,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Terminal;
