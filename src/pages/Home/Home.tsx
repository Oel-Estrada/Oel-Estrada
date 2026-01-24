import type { JSX } from 'react';

/**
 * Represents the Home component.
 *
 * @return {JSX.Element} The JSX structure for the Home component, displaying the Home Page.
 */
function Home(): JSX.Element {
    return (
        <section className="w-[90%] max-w-6xl mx-auto">
            <div className="max-w-275 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        Text Information
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
