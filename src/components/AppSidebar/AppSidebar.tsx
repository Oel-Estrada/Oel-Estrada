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

    return (
        <Sidebar
            className="z-50"
            side="right"
            variant="floating"
            collapsible="offcanvas"
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex justify-between p-2">
                        <Logo />
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
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {NAVIGATION_ITEMS.map(
                                ({ label, icon: Icon, to }) => (
                                    <SidebarMenuItem key={label}>
                                        <SidebarMenuButton
                                            asChild
                                            className="text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <NavLink
                                                key={label}
                                                to={to}
                                                aria-label={t(label)}
                                            >
                                                {Icon && <Icon />}
                                                {t(label)}
                                            </NavLink>
                                        </SidebarMenuButton>
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
