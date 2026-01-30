import {
    ArrowRight,
    Briefcase,
    Layers,
    Lightbulb,
    type LucideIcon,
    Workflow,
} from 'lucide-react';
import type { To } from 'react-router';

import { ROUTES } from '@/constants/routes.ts';
import { contactInfo } from '@/lib/constants.ts';

export interface NavbarLink {
    icon?: LucideIcon;
    label: string;
    to: To;
}

export const NAVIGATION_ITEMS: NavbarLink[] = [
    { icon: Briefcase, label: 'navBar.work', to: ROUTES.PROJECTS },
    { icon: Layers, label: 'navBar.techStack', to: ROUTES.TECH_STACK },
    { icon: Workflow, label: 'navBar.howIWork', to: ROUTES.PROCESS },
    { icon: Lightbulb, label: 'navBar.insights', to: ROUTES.INSIGHTS },
];

export const FOOTER_LINKS: NavbarLink[] = [
    { label: 'footer.github', to: contactInfo.github },
    { label: 'footer.linkedin', to: contactInfo.linkedin },
];

export const CONTACT_LINK: NavbarLink = {
    icon: ArrowRight,
    label: 'contact',
    to: ROUTES.CONTACT,
};
