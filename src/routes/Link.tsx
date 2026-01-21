import { Link as RouterLink, type LinkProps, type To } from 'react-router';

import { useLocalizedPath } from './hooks/useLocalizedPath.tsx';

import type { JSX } from 'react';

interface AppLinkProps extends Omit<LinkProps, 'to'> {
    to: To;
    params?: Record<string, string | number>;
}

/**
 * Link component that generates a localized path and renders a React Router `RouterLink`.
 *
 * @param {Object} options - The component's props.
 * @param {string} options.to - The base path or route to navigate to.
 * @param {Object} [options.params] - Optional parameters to be used for route localization.
 * @param {Object} options.props - Additional properties to be passed to the underlying RouterLink.
 *
 * @return {JSX.Element} A React Router `RouterLink` component with a localized path.
 */
export function Link({ to, params, ...props }: AppLinkProps): JSX.Element {
    const getLocalizedPath = useLocalizedPath();
    const localizedTo = getLocalizedPath(to, params);

    return <RouterLink {...props} to={localizedTo} />;
}

export default Link;
export type { AppLinkProps };
