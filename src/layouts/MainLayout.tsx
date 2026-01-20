import { Outlet } from 'react-router';

import AppSidebar from '@/components/AppSidebar/AppSidebar.tsx';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';

import type { JSX } from 'react';

/**
 * Main layout part that structures the primary layout of the application.
 * It includes the navigation bar, main content, footer, and a theme switcher.
 *
 * @return {JSX.Element} The main layout container for the application.
 */
function MainLayout(): JSX.Element {
    return (
        <SidebarProvider defaultOpen={false}>
            <div className="min-h-screen flex flex-col pt-16.25 w-full min-w-xs overflow-hidden">
                <AppSidebar />
                <Navbar />
                <main className="grow">
                    <Outlet />
                </main>
                <Footer />
                <ThemeSwitcher />
            </div>
        </SidebarProvider>
    );
}

export default MainLayout;
