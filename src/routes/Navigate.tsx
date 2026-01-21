import {
    Navigate as RouterNavigate,
    type NavigateProps,
    type To,
} from 'react-router';

import { useLocalizedPath } from './hooks/useLocalizedPath.tsx';

import type { JSX } from 'react';

interface AppNavigateProps extends Omit<NavigateProps, 'to'> {
    to: To;
    params?: Record<string, string | number>;
}

/**
 * Navigates to a specified route with localized path support.
 *
 * @param {Object} options - The navigation options.
 * @param {string} options.to - The target route to navigate to.
 * @param {Object} options.params - Parameters to include in the localized path.
 * @param {Object} [props] - Additional properties to pass to the navigation component.
 *
 * @return {JSX.Element} The navigation component rendering the localized route.
 */
export function Navigate({
    to,
    params,
    ...props
}: AppNavigateProps): JSX.Element {
    const getLocalizedPath = useLocalizedPath();
    const localizedTo = getLocalizedPath(to, params);

    return <RouterNavigate {...props} to={localizedTo} />;
}

export default Navigate;
export type { AppNavigateProps };
