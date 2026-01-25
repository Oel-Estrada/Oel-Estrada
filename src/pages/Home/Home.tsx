import { Download } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

import Badge from '@/components/Badge/Badge.tsx';
import { Button } from '@/components/ui/button.tsx';

import type { JSX } from 'react';

/**
 * Represents the Home component.
 *
 * @return {JSX.Element} The JSX structure for the Home component, displaying the Home Page.
 */
function Home(): JSX.Element {
    const { t } = useTranslation(['home', 'common']);

    return (
        <section className="w-[90%] max-w-6xl mx-auto mt-4">
            <div className="max-w-275 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <Badge
                            text={t('common:status.availableForProjects')}
                            showPing
                            variant="primary"
                        />
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                                <Trans
                                    i18nKey="home:hero.title"
                                    components={{
                                        1: <span className="text-primary" />,
                                    }}
                                />
                            </h1>
                            <p className="text-lg md:text-xl text-text-secondary max-w-xl font-light leading-relaxed">
                                <Trans
                                    i18nKey="home:hero.subtitle"
                                    components={{
                                        1: (
                                            <span className="text-foreground font-medium" />
                                        ),
                                    }}
                                />
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="min-w-40 cursor-pointer rounded-full h-14 px-8 text-base font-bold tracking-tighter">
                                Trabajemos juntos
                            </Button>
                            <Button
                                variant="outline"
                                className="min-w-40 cursor-pointer rounded-full h-14 has-[>svg]:px-8 text-base font-bold tracking-tight"
                            >
                                <Download className="mr-2 size-6" />
                                Download CV
                            </Button>
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
