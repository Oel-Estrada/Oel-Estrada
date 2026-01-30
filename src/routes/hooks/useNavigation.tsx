import type { NavigateOptions } from 'react-router';
import { type To, useNavigate as useReactRouterNavigate } from 'react-router';

import { useLocalizedPath } from '@/routes';

type PathParamValue = string | number;
type PathParams = Record<string, PathParamValue>;
type AppNavigateOptions = NavigateOptions & { params?: PathParams };
type AppNavigate = (to: To, options?: AppNavigateOptions) => Promise<void>;

/**
 * Custom hook to navigate to a specified route with localization support.
 */
export function useNavigation(): AppNavigate {
    const navigate = useReactRouterNavigate();
    const getLocalizedPath = useLocalizedPath();

    return async (to, options) => {
        const localizedTo = getLocalizedPath(to, options?.params);

        const { params: _params, ...navOptions } = options ?? {};

        await navigate(localizedTo, navOptions);
    };
}

export type { AppNavigate, AppNavigateOptions };
