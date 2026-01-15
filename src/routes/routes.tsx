import { Navigate, Outlet, type RouteObject } from "react-router";
import StyleGuide from "@/pages/StyleGuide/StyleGuide.tsx";
import LangLayout from "@/routes/LangLayout.tsx";
import RootRedirect from "@/routes/RootRedirect.tsx";
import { ENVIRONMENTS } from "@/env.ts";
import Home from "@/pages/Home/Home.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import ComingSoon from "@/pages/ComingSoon/ComingSoon.tsx";

/**
 * Extended RouteObject to include development-only routes.
 */
export type AppRouteObject = RouteObject & {
    isDevelopment?: boolean;
    children?: AppRouteObject[];
};

const routesConfig: AppRouteObject[] = [
    {
        path: "/",
        Component: RootRedirect,
    },
    {
        path: "/style-guide",
        Component: StyleGuide,
        isDevelopment: true,
    },
    {
        path: "/:lang",
        Component: LangLayout,
        children: [
            {
                Component: ENVIRONMENTS.isProd ? Outlet : MainLayout,
                children: [
                    {
                        index: true,
                        Component: ENVIRONMENTS.isProd ? ComingSoon : Home,
                    },
                    {
                        path: "*",
                        element: <Navigate to="/" replace />,
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
                filteredRoute.children = filterRoutes(filteredRoute.children) as AppRouteObject[];
            }

            delete filteredRoute.isDevelopment;
            return filteredRoute as RouteObject;
        });

export const routes: RouteObject[] = filterRoutes(routesConfig);
