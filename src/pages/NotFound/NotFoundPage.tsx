import React from 'react';

import { House, Wrench } from 'lucide-react';
import type { JSX } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import Badge from '@/components/Badge/Badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ROUTES } from '@/constants/routes.ts';
import Terminal from '@/pages/NotFound/components/Terminal/Terminal.tsx';
import { useNavigation } from '@/routes';

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
    const navigate = useNavigation();

    /**
     * Handler to navigate to the projects page to "fix the bug".
     */
    const fixBugHandler = (): void => {
        void navigate(ROUTES.PROJECTS);
    };

    /**
     * Handler to navigate back to the home page.
     */
    const returnHomeHandler = (): void => {
        void navigate(ROUTES.HOME);
    };

    return (
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
            <div className="flex flex-col items-center max-w-2xl w-full">
                <div className="relative mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-black font-mono tracking-tighter leading-none opacity-90">
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
                    <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
                        <Trans
                            i18nKey="notFound:descriptionWithRoute"
                            values={{ route: pathname }}
                            components={{
                                1: (
                                    <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded-full" />
                                ),
                                2: <code className="text-primary font-bold" />,
                            }}
                        />
                    </p>
                </div>
                <Terminal />
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button
                        onClick={fixBugHandler}
                        className="min-w-40 cursor-pointer border rounded-full h-14 has-[>svg]:px-8 text-base font-bold tracking-tighter"
                    >
                        <Wrench />
                        {t('notFound:actions.fixBug')}
                    </Button>
                    <Button
                        onClick={returnHomeHandler}
                        variant="outline"
                        className="min-w-40 cursor-pointer border rounded-full h-14 has-[>svg]:px-8 text-base font-bold tracking-tighter"
                    >
                        <House />
                        {t('notFound:actions.returnHome')}
                    </Button>
                </div>
            </div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        </div>
    );
}

export default NotFoundPage;
