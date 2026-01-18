import { Outlet } from 'react-router';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';

import type { JSX } from 'react';

/**
 * Main layout part that structures the primary layout of the application.
 * It includes the navigation bar, main content, footer, and a theme switcher.
 *
 * @return {JSX.Element} The main layout container for the application.
 */
function MainLayout(): JSX.Element {
    return (
        <div className="min-h-screen flex flex-col pt-16.25">
            <Navbar />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
            <ThemeSwitcher />
        </div>
    );
}

export default MainLayout;
