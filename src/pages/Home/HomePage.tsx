import { type JSX } from 'react';

import { useTranslation } from 'react-i18next';

import JsonLd from '@/components/JsonLd.tsx';
import MetaTags from '@/components/MetaTags.tsx';
import { personSchema } from '@/lib/constants.ts';
import HomeHeroSection from '@/pages/Home/components/HomeHeroSection/HomeHeroSection.tsx';

/**
 * Represents the HomePage component.
 *
 * @return {JSX.Element} The JSX structure for the HomePage component, displaying the HomePage Page.
 */
function HomePage(): JSX.Element {
    const { t } = useTranslation('home');

    return (
        <>
            <MetaTags
                title={t('meta.title')}
                description={t('meta.description')}
                keywords={t('meta.keywords')}
            />
            <JsonLd schema={personSchema} />
            <HomeHeroSection />
        </>
    );
}

export default HomePage;
