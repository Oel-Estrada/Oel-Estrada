import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import Badge from '@/components/Badge/Badge.tsx';

/**
 * Not Found Page component.
 *
 * Used by the router to display a 404 Not Found page.
 *
 * @returns {JSX.Element} The NotFoundPage component.
 */
function NotFoundPage(): JSX.Element {
    const { t } = useTranslation(['common', 'notFound']);
    const { pathname } = useLocation();

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
            <div className="flex flex-col items-center max-w-2xl w-full">
                <div className="relative mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-black tracking-tighter leading-none opacity-90">
                        404
                    </h1>
                    <Badge
                        variant="danger"
                        text={t('common:status.criticalError')}
                        showPing
                        className="absolute -top-4 -right-8"
                    />
                </div>
                <div className="space-y-4 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold font-display">
                        {t('notFound:title')}
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                        Módulo no encontrado:
                        <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                            {pathname}
                        </code>{' '}
                        se movió o se eliminó de{' '}
                        <code className="text-primary font-bold">main</code>.
                    </p>
                </div>
            </div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        </div>
    );
}

export default NotFoundPage;
