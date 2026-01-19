import { DraftingCompass } from 'lucide-react';
import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/constants/routes.ts';
import { Link } from '@/routes';

/**
 * Logo component displaying the site logo with an icon and text.
 *
 * @returns {JSX.Element} The rendered Logo component.
 */
function Logo(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Link
            to={ROUTES.HOME}
            aria-label={t('home')}
            className="flex items-center gap-2 hover:opacity-100 active:scale-100"
        >
            <span className="size-9 bg-primary rounded-full flex items-center justify-center">
                <DraftingCompass
                    aria-hidden="true"
                    className="h-6 w-6 text-primary-foreground"
                    strokeWidth={3}
                />
            </span>
            <div className="flex flex-col leading-none">
                <span className="font-extrabold tracking-tighter text-sm uppercase">
                    {t('name')}
                </span>
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
                    {t('specialty')}
                </span>
            </div>
        </Link>
    );
}

export default Logo;
