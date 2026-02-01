import { Navigate, Outlet, type RouteObject } from 'react-router';

import { ROUTES } from '@/constants/routes.ts';
import { ENVIRONMENTS } from '@/env.ts';
import MainLayout from '@/layouts/MainLayout.tsx';
import ComingSoonPage from '@/pages/ComingSoon/ComingSoonPage.tsx';
import HomePage from '@/pages/Home/HomePage.tsx';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage.tsx';
import StyleGuidePage from '@/pages/StyleGuide/StyleGuidePage.tsx';
import LangLayout from '@/routes/LangLayout.tsx';
import RootRedirect from '@/routes/RootRedirect.tsx';

/**
 * Extended RouteObject to include development-only routes.
 */
export type AppRouteObject = RouteObject & {
    isDevelopment?: boolean;
    children?: AppRouteObject[];
};

const routesConfig: AppRouteObject[] = [
    {
        path: '/',
        Component: RootRedirect,
    },
    {
        path: ROUTES.STYLE_GUIDE,
        Component: StyleGuidePage,
        isDevelopment: true,
    },
    {
        path: '/:lang',
        Component: LangLayout,
        children: [
            {
                Component: ENVIRONMENTS.isProd ? Outlet : MainLayout,
                children: [
                    {
                        index: true,
                        Component: ENVIRONMENTS.isProd
                            ? ComingSoonPage
                            : HomePage,
                    },
                    {
                        path: ROUTES.PROJECTS,
                        element: <>Projects</>,
                        isDevelopment: true,
                    },
                    {
                        path: ROUTES.TECH_STACK,
                        element: <>Tech Stack</>,
                        isDevelopment: true,
                    },
                    {
                        path: ROUTES.PROCESS,
                        element: <>Process</>,
                        isDevelopment: true,
                    },
                    {
                        path: ROUTES.INSIGHTS,
                        element: <>Insights</>,
                        isDevelopment: true,
                    },
                    {
                        path: ROUTES.CONTACT,
                        element: <>Contact</>,
                        isDevelopment: true,
                    },
                    {
                        path: ROUTES.NOT_FOUND,
                        Component: NotFoundPage,
                        isDevelopment: true,
                    },
                    {
                        path: '*',
                        element: ENVIRONMENTS.isProd ? (
                            <Navigate to={ROUTES.HOME} replace />
                        ) : (
                            <NotFoundPage />
                        ),
                    },
                ],
            },
        ],
    },
];

/**
 * Filter routes based on the environment.
 * @param routes
 */
const filterRoutes = (routes: AppRouteObject[]): RouteObject[] =>
    routes
        .filter((route) => !route.isDevelopment || ENVIRONMENTS.isDev)
        .map((route) => {
            const filteredRoute = { ...route };
            if (filteredRoute.children) {
                filteredRoute.children = filterRoutes(
                    filteredRoute.children,
                ) as AppRouteObject[];
            }

            delete filteredRoute.isDevelopment;
            return filteredRoute as RouteObject;
        });

export const routes: RouteObject[] = filterRoutes(routesConfig);
