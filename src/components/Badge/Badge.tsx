import { cn } from '@/lib/utils';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'default';

interface BadgeProps {
    text: string;
    variant?: BadgeVariant;
    showPing?: boolean;
    className?: string;
}

const VARIANT_STYLES: Record<
    BadgeVariant,
    {
        container: string;
        border: string;
        text: string;
        dot: string;
        ping: string;
    }
> = {
    primary: {
        container: 'bg-primary/10',
        border: 'border-primary/20',
        text: 'text-primary',
        dot: 'bg-primary',
        ping: 'bg-primary opacity-75',
    },
    success: {
        container: 'bg-success/10',
        border: 'border-success/20',
        text: 'text-success',
        dot: 'bg-success',
        ping: 'bg-success opacity-75',
    },
    warning: {
        container: 'bg-warning/10',
        border: 'border-warning/20',
        text: 'text-warning',
        dot: 'bg-warning',
        ping: 'bg-warning opacity-75',
    },
    danger: {
        container: 'bg-error/10',
        border: 'border-error/20',
        text: 'text-error',
        dot: 'bg-error',
        ping: 'bg-error opacity-75',
    },
    default: {
        container: 'bg-muted/10',
        border: 'border-muted/20',
        text: 'text-muted-foreground',
        dot: 'bg-muted-foreground',
        ping: 'bg-muted-foreground opacity-75',
    },
};

function Badge({
    text,
    variant = 'default',
    showPing = false,
    className = '',
}: BadgeProps) {
    const styles = VARIANT_STYLES[variant];

    return (
        <div
            className={cn(
                `inline-flex items-center gap-2 px-3 py-1 rounded-full border w-fit`,
                styles.container,
                styles.border,
                className,
            )}
        >
            {showPing && (
                <span className="relative flex h-2 w-2">
                    <span
                        className={cn(
                            'animate-ping absolute inline-flex h-full w-full rounded-full',
                            styles.ping,
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
        </div>
    );
}

export default Badge;
