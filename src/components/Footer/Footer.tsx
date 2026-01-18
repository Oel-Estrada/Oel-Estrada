import type { JSX } from 'react';

/**
 * Represents the footer component of the application.
 *
 * Used by {@link MainLayout} to display footer content at the bottom of the page.
 *
 * @return {JSX.Element} The rendered footer element with styling and text content.
 */
function Footer(): JSX.Element {
    return (
        <footer className="w-full border-t py-6 px-6 text-center text-sm text-muted-foreground">
            Footer
        </footer>
    );
}

export default Footer;
