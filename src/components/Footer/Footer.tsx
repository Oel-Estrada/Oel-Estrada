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
        <footer className="py-12 px-6 border-t border-white/5 bg-background-dark/50 relative z-10">
            <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex">LOG</div>
                <div className="flex">LINKS</div>
                <div className="flex">Select Language</div>
            </div>
        </footer>
    );
}

export default Footer;
