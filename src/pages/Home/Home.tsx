import { type JSX } from 'react';

import HomeHeroSection from '@/pages/Home/components/HomeHeroSection/HomeHeroSection.tsx';

/**
 * Represents the Home component.
 *
 * @return {JSX.Element} The JSX structure for the Home component, displaying the Home Page.
 */
function Home(): JSX.Element {
    return (
        <>
            <HomeHeroSection />
        </>
    );
}

export default Home;
