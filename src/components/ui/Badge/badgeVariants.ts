import { cva } from "class-variance-authority";

export const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary-hover",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
                destructive:
                    "border-transparent bg-error text-text-inverse [a&]:hover:bg-error/90 focus-visible:ring-error/20 dark:focus-visible:ring-error/40",
                outline:
                    "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
                success:
                    "border-transparent bg-success text-text-inverse",
                warning:
                    "border-transparent bg-warning text-text-inverse",
                info:
                    "border-transparent bg-info text-text-inverse",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);
