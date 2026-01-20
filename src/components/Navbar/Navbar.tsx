import { useTranslation } from 'react-i18next';

import Logo from '@/components/Logo/Logo.tsx';
import SelectLanguage from '@/components/Navbar/components/SelectLanguage.tsx';
import { SidebarTrigger } from '@/components/ui/sidebar.tsx';
import { CONTACT_LINK, NAVIGATION_ITEMS } from '@/constants/navigation.ts';
import { cn } from '@/lib/utils.ts';
import { Link, NavLink } from '@/routes';

import type { JSX } from 'react';

/**
 * Renders the Navbar component.
 *
 * This component represents a fixed navigation bar at the top of the page.
 * It includes a semi-transparent background, a border at the bottom,
 * and uses flexbox for layout to space its child elements.
 *
 * Used by {@link MainLayout} to provide consistent navigation across the application.
 *
 * @return {JSX.Element} A JSX element that renders a navigation bar.
 */
function Navbar(): JSX.Element {
    const { t } = useTranslation();

    return (
        <nav
            aria-label={t('mainNavigation')}
            className="glass rounded-full px-6 py-3 flex items-center justify-between fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-6xl"
        >
            <Logo />
            <div className="hidden lg:flex items-center gap-8">
                {NAVIGATION_ITEMS.map((link) => (
                    <NavLink
                        key={link.label}
                        to={link.to}
                        aria-label={t(link.label)}
                        className={({ isActive }) =>
                            cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                isActive ? 'text-primary' : 'text-foreground',
                            )
                        }
                    >
                        {t(link.label)}
                    </NavLink>
                ))}
            </div>
            <div className="flex items-center gap-3">
                <SelectLanguage className="hidden xs:flex" />
                <Link
                    to={CONTACT_LINK.to}
                    aria-label={t(CONTACT_LINK.label)}
                    className="hidden sm:flex items-center justify-center rounded-full h-10 px-5 bg-primary text-primary-foreground text-sm font-bold transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                >
                    {t(CONTACT_LINK.label)}
                </Link>
                <SidebarTrigger className="lg:hidden size-10 flex items-center justify-center rounded-full bg-surface border border-border cursor-pointer hover:bg-primary/10 transition-colors" />
            </div>
        </nav>
    );
}

export default Navbar;
