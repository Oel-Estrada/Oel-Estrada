import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'default';

interface BadgeProps extends Omit<React.ComponentProps<'div'>, 'children'> {
    text: string;
    variant?: BadgeVariant;
    showPing?: boolean;
    asChild?: boolean;
}

const VARIANT_STYLES: Record<
    BadgeVariant,
    {
        container: string;
        border: string;
        text: string;
        dot: string;
    }
> = {
    primary: {
        container: 'bg-primary/10',
        border: 'border-primary/20',
        text: 'text-primary',
        dot: 'bg-primary',
    },
    success: {
        container: 'bg-success/10',
        border: 'border-success/20',
        text: 'text-success',
        dot: 'bg-success',
    },
    warning: {
        container: 'bg-warning/10',
        border: 'border-warning/20',
        text: 'text-warning',
        dot: 'bg-warning',
    },
    danger: {
        container: 'bg-error/10',
        border: 'border-error/20',
        text: 'text-error',
        dot: 'bg-error',
    },
    default: {
        container: 'bg-muted/10',
        border: 'border-muted/20',
        text: 'text-muted-foreground',
        dot: 'bg-muted-foreground',
    },
};

function Badge({
    text,
    variant = 'default',
    showPing = false,
    className = '',
    asChild = false,
    ...props
}: BadgeProps) {
    const Comp = (asChild ? Slot : 'div') as React.ElementType;
    const safeVariant = variant in VARIANT_STYLES ? variant : 'default';
    const styles = VARIANT_STYLES[safeVariant];

    return (
        <Comp
            data-slot="badge"
            className={cn(
                `inline-flex items-center gap-2 px-3 py-1 rounded-full border w-fit leading-tight`,
                styles.container,
                styles.border,
                className,
            )}
            {...props}
        >
            {showPing && (
                <span className="relative flex h-2 w-2">
                    <span
                        className={cn(
                            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                            styles.dot,
                        )}
                    />
                    <span
                        className={cn(
                            'relative inline-flex rounded-full h-2 w-2',
                            styles.dot,
                        )}
                    />
                </span>
            )}
            <span
                className={cn(
                    'text-[10px] font-bold uppercase tracking-widest',
                    styles.text,
                )}
            >
                {text}
            </span>
        </Comp>
    );
}

export default Badge;
