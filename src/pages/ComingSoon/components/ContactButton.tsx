import React, { type JSX } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button/Button.tsx";
import { buttonVariants } from "@/components/ui/Button/buttonVariants.tsx";
import type { VariantProps } from "class-variance-authority";

export interface ContactButtonProps {
    icon: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        className?: string;
    };
    target?: string;
    label: string;
    href: string;
    className?: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
}

/**
 * Renders a contact button with an icon and label, providing hover and tap animations.
 *
 * @param {Object} props - Properties passed to the ContactButton component.
 * @param {Object} props.icon - Icon component to be displayed in the button.
 * @param {string} [props.target=""] - Specifies where to open the linked document (e.g., '_blank', '_self').
 * @param {string} props.label - Aria-label and accessible label for the button.
 * @param {string} props.href - URL the button links to.
 * @param {string} [props.className] - Additional custom classes to style the button.
 * @param {string} props.variant - Variant of the button, determining its visual style.
 *
 * @return {JSX.Element} A JSX element representing the contact button.
 */
export default function ContactButton({
    icon: Icon,
    target = "",
    label,
    href,
    className,
    variant
}: ContactButtonProps): JSX.Element {
    return (
        <Button asChild variant={variant} size="lg" className={className ?? ''}>
            <motion.a
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target={target}
                className="flex items-center gap-2"
            >
                <Icon.icon className={`w-5 h-5 ${Icon.className ?? ''}`} />
                {label}
            </motion.a>
        </Button>
    );
}