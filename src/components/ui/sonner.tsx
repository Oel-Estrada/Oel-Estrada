import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className="toaster group"
            visibleToasts={6}
            icons={{
                success: <CircleCheckIcon className="size-4" />,
                info: <InfoIcon className="size-4" />,
                warning: <TriangleAlertIcon className="size-4" />,
                error: <OctagonXIcon className="size-4" />,
                loading: <Loader2Icon className="size-4 animate-spin" />,
            }}
            toastOptions={{
                classNames: {
                    toast: 'group toast group-[.toaster]:bg-surface group-[.toaster]:text-text-primary group-[.toaster]:border-border group-[.toaster]:shadow-lg',
                    description: 'group-[.toast]:text-text-muted',
                    actionButton:
                        'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground hover:group-[.toast]:bg-primary-hover',
                    cancelButton:
                        'group-[.toast]:bg-surface group-[.toast]:text-text-muted',
                    success:
                        'group-[.toaster]:text-success group-[.toaster]:border-success/30',
                    error: 'group-[.toaster]:text-error group-[.toaster]:border-error/30',
                    info: 'group-[.toaster]:text-info group-[.toaster]:border-info/30',
                    warning:
                        'group-[.toaster]:text-warning group-[.toaster]:border-warning/30',
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
