import {
    NavLink as RouterNavLink,
    type NavLinkProps,
    type To,
} from 'react-router';

import { useLocalizedPath } from './hooks/useLocalizedPath.tsx';

import type { JSX } from 'react';

interface AppNavLinkProps extends Omit<NavLinkProps, 'to'> {
    to: To;
    params?: Record<string, string | number>;
}

/**
 * Renders a navigation link that supports localization and parameterized paths.
 *
 * @param {Object} props - The component props.
 * @param {string} props.to - The target path for the navigation link.
 * @param {Object} [props.params] - Optional parameters to be included in the path.
 * @param {...any} [props] - Additional props to be passed to the underlying RouterNavLink component.
 *
 * @return {JSX.Element} A JSX element representing the navigation link.
 */
export function NavLink({
    to,
    params,
    ...props
}: AppNavLinkProps): JSX.Element {
    const getLocalizedPath = useLocalizedPath();
    const localizedTo = getLocalizedPath(to, params);

    return <RouterNavLink {...props} to={localizedTo} />;
}

export default NavLink;
export type { AppNavLinkProps };
