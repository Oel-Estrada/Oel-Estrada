import { type FC, type JSX, type SVGProps } from 'react';

import { cn } from '@/lib/utils.ts';

interface TechBadgeProps {
    label: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
    className?: string;
}

/**
 * TechBadge functional component for displaying a badge with an icon and label.
 *
 * This component renders a stylized badge that includes an icon and an uppercase label.
 * It supports custom CSS classes for additional styling.
 *
 * @param {object} props - Props for the TechBadge component.
 * @param {string} props.label - Text label to display on the badge.
 * @param {React.ComponentType<React.SVGProps<SVGSVGElement>>} props.Icon - Icon component to render within the badge.
 * @param {string} [props.className] - Additional CSS class names to customize the styling of the badge.
 *
 * @returns {JSX.Element} The rendered TechBadge component.
 */
function TechBadge({ label, Icon, className }: TechBadgeProps): JSX.Element {
    return (
        <div
            className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface group',
                className,
            )}
        >
            <Icon
                color="var(--text-primary)"
                className="size-4 transition-colors"
            />
            <span className="text-xs font-bold uppercase tracking-tighter">
                {label}
            </span>
        </div>
    );
}

export default TechBadge;
