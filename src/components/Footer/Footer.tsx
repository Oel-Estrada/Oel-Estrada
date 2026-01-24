import { ArrowUpFromDot, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { FOOTER_LINKS } from '@/constants/navigation.ts';
import { Link } from '@/routes';

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

    /**
     * Scrolls the page to the top of the viewport.
     */
    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="py-6 px-6 border-t border-border bg-background-dark relative z-10">
            <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="order-2 md:order-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-balance text-center">
                        {t('footer.copyrights')}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 order-1 md:order-2 w-full md:w-auto">
                    {FOOTER_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            className="font-black text-text-secondary hover:text-primary transition-colors flex gap-1 items-center uppercase tracking-widest"
                            target="_blank"
                            to={link.to}
                        >
                            <span className="text-xs font-bold">
                                {t(link.label)}
                            </span>
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    ))}
                    <div className="h-px md:h-4 w-12 md:w-px bg-border" />
                    <button
                        className="flex items-center gap-2 text-xs font-black text-muted-foreground  hover:text-text-secondary transition-colors uppercase tracking-widest group"
                        onClick={scrollToTop}
                        type="button"
                    >
                        <span>{t('footer.backToTop')}</span>
                        <ArrowUpFromDot className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
