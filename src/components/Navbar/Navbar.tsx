import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Logo from '@/components/Logo/Logo.tsx';
import SelectLanguage from '@/components/Navbar/components/SelectLanguage.tsx';
import { ROUTES } from '@/constants/routes.ts';
import { Link } from '@/routes';

import type { JSX } from 'react';
import type { To } from 'react-router';

interface NavbarLink {
    label: string;
    to: To;
}

const NAVBAR_LINKS: NavbarLink[] = [
    { label: 'navBar.work', to: ROUTES.PROJECTS },
    { label: 'navBar.techStack', to: ROUTES.TECH_STACK },
    { label: 'navBar.howIWork', to: ROUTES.PROCESS },
    { label: 'navBar.insights', to: ROUTES.INSIGHTS },
];

const CONTACT_LINK: NavbarLink = {
    label: 'contact',
    to: ROUTES.CONTACT,
};

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
            className="glass rounded-full px-6 py-3 flex items-center justify-between fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl"
        >
            <Logo />
            <div className="hidden lg:flex items-center gap-8">
                {NAVBAR_LINKS.map((link) => (
                    <Link
                        key={link.label}
                        className="text-sm font-medium hover:text-primary transition-colors"
                        to={link.to}
                        aria-label={t(link.label)}
                    >
                        {t(link.label)}
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-3">
                <SelectLanguage className="hidden xs:flex" />
                <Link
                    to={CONTACT_LINK.to}
                    aria-label={t(CONTACT_LINK.label)}
                    className="hidden sm:flex items-center justify-center rounded-full h-10 px-5 bg-accent text-primary-foreground text-sm font-bold transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent)"
                >
                    {t(CONTACT_LINK.label)}
                </Link>
                <span className="lg:hidden size-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 cursor-pointer active:bg-white/10 transition-colors">
                    <Menu className="h-4 w-4 text-primary-foreground" />
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
