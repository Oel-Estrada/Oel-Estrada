import { type RouteObject } from "react-router-dom";
import ComingSoon from "@/pages/ComingSoon/ComingSoon.tsx";
import StyleGuide from "@/pages/StyleGuide/StyleGuide.tsx";
import LangLayout from "@/routes/LangLayout.tsx";
import RootRedirect from "@/routes/RootRedirect.tsx";
import { isDev } from "@/env.ts";

export const routes: RouteObject[] = [
    {
        path: "/",
        Component: RootRedirect,
    },
    ...(isDev
        ? [
            {
                path: "/style-guide",
                Component: StyleGuide,
            },
        ]
        : []),
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
