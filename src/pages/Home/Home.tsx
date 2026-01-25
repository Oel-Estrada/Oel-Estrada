import { useTranslation } from 'react-i18next';

import Badge from '@/components/Badge/Badge.tsx';

import type { JSX } from 'react';

/**
 * Represents the Home component.
 *
 * @return {JSX.Element} The JSX structure for the Home component, displaying the Home Page.
 */
function Home(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section className="w-[90%] max-w-6xl mx-auto mt-4">
            <div className="max-w-275 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <Badge
                            text={t('status.availableForProjects')}
                            showPing
                            variant="primary"
                        />
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                                Creando experiencias digitales de{' '}
                                <span className="text-primary">
                                    alto rendimiento
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative hidden lg:block">
                        Avatar
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
