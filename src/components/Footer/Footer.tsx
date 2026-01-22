import { useTranslation } from 'react-i18next';

import type { JSX } from 'react';

/**
 * Represents the footer component of the application.
 *
 * Used by {@link MainLayout} to display footer content at the bottom of the page.
 *
 * @return {JSX.Element} The rendered footer element with styling and text content.
 */
function Footer(): JSX.Element {
    const { t } = useTranslation();

    return (
        <footer className="py-6 px-6 border-t border-border bg-background-dark relative z-10">
            <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="order-2 md:order-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-balance text-center">
                        {t('footer.copyrights')}
                    </p>
                </div>
                <div className="flex">LINKS</div>
                <div className="flex">Select Language</div>
            </div>
        </footer>
    );
}

export default Footer;
