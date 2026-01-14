import { type RouteObject } from "react-router";
import ComingSoon from "@/pages/ComingSoon/ComingSoon.tsx";
import StyleGuide from "@/pages/StyleGuide/StyleGuide.tsx";
import LangLayout from "@/routes/LangLayout.tsx";
import RootRedirect from "@/routes/RootRedirect.tsx";
import { isDev } from "@/env.ts";

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
                index: true,
                Component: ComingSoon,
            },
            {
                path: "*",
                Component: ComingSoon,
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
        .filter((route) => !route.isDevelopment || isDev)
        .map((route) => {
            const filteredRoute = { ...route };
            if (filteredRoute.children) {
                filteredRoute.children = filterRoutes(filteredRoute.children) as AppRouteObject[];
            }

            delete filteredRoute.isDevelopment;
            return filteredRoute as RouteObject;
        });

export const routes: RouteObject[] = filterRoutes(routesConfig);
