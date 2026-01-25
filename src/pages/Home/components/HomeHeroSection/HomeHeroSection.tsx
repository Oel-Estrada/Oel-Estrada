import { type JSX } from 'react';

import HomeHeroImageSection from '@/pages/Home/components/HomeHeroSection/components/HomeHeroImageSection/HomeHeroImageSection.tsx';
import HomeHeroMainSection from '@/pages/Home/components/HomeHeroSection/components/HomeHeroMainSection/HomeHeroMainSection.tsx';

/**
 * Represents the Home component.
 *
 * Used by {@link HomePage} to display the Home Page Hero section.
 *
 * @return {JSX.Element} The JSX structure for the Home component, displaying the Home Page.
 */
function HomeHeroSection(): JSX.Element {
    return (
        <section className="w-[90%] max-w-6xl mx-auto mt-4">
            <div className="max-w-275 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <HomeHeroMainSection />
                    </div>
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <HomeHeroImageSection />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeroSection;
