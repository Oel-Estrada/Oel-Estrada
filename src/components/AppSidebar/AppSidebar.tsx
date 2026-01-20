import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Logo from '@/components/Logo/Logo.tsx';
import SelectLanguage from '@/components/Navbar/components/SelectLanguage.tsx';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar.tsx';
import { NAVIGATION_ITEMS } from '@/constants/navigation.ts';
import { NavLink } from '@/routes';

import type { JSX } from 'react';

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
        </Sidebar>
    );
}

export default AppSidebar;
