import { X } from 'lucide-react';
import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/components/Logo/Logo.tsx';
import SelectLanguage from '@/components/Navbar/components/SelectLanguage.tsx';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar.tsx';
import { CONTACT_LINK, NAVIGATION_ITEMS } from '@/constants/navigation.ts';
import { Link, NavLink } from '@/routes';

/**
 * Renders the application sidebar component.
 *
 * @return {JSX.Element} The sidebar component.
 */
function AppSidebar(): JSX.Element {
    const { t } = useTranslation();
    const { setOpen, setOpenMobile, isMobile } = useSidebar();

    /**
     * Closes the sidebar based on the current device type.
     */
    const closeSidebar = (): void => {
        if (isMobile) {
            setOpenMobile(false);
        } else {
            setOpen(false);
        }
    };

    return (
        <Sidebar
            className="z-50"
            side="right"
            variant="floating"
            collapsible="offcanvas"
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex justify-between p-4">
                        <Logo onClick={closeSidebar} />
                        <div className="flex items-center gap-1">
                            <SelectLanguage className="" />
                            <SidebarTrigger
                                icon={X}
                                className="size-10 flex items-center justify-center rounded-full bg-surface border border-border cursor-pointer hover:bg-primary/10 transition-colors"
                            />
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="px-4">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {NAVIGATION_ITEMS.map(
                                ({ label, icon: Icon, to }) => (
                                    <SidebarMenuItem key={label}>
                                        <NavLink
                                            key={label}
                                            to={to}
                                            aria-label={t(label)}
                                            className="w-full"
                                            onClick={closeSidebar}
                                        >
                                            {({ isActive }) => (
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={isActive}
                                                    className="text-sm font-medium hover:text-primary transition-colors"
                                                >
                                                    <div>
                                                        {Icon && <Icon />}
                                                        {t(label)}
                                                    </div>
                                                </SidebarMenuButton>
                                            )}
                                        </NavLink>
                                    </SidebarMenuItem>
                                ),
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem className="flex justify-between p-4">
                        <Link
                            to={CONTACT_LINK.to}
                            aria-label={t(CONTACT_LINK.label)}
                            className="flex sm:hidden w-full gap-2 items-center justify-center rounded-full h-10 px-5 bg-accent text-primary-foreground text-sm font-bold transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent)"
                        >
                            {t(CONTACT_LINK.label)}
                            {CONTACT_LINK.icon && (
                                <CONTACT_LINK.icon className="h-4 w-4" />
                            )}
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;
