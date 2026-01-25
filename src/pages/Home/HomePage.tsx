import { type JSX } from 'react';

import HomeHeroSection from '@/pages/Home/components/HomeHeroSection/HomeHeroSection.tsx';

/**
 * Represents the HomePage component.
 *
 * @return {JSX.Element} The JSX structure for the HomePage component, displaying the HomePage Page.
 */
function HomePage(): JSX.Element {
    return (
        <>
            <HomeHeroSection />
        </>
    );
}

export default HomePage;
