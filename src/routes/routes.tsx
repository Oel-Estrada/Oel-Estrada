import { type RouteObject } from "react-router-dom";
import ComingSoon from "@/pages/ComingSoon/ComingSoon.tsx";
import LangLayout from "@/routes/LangLayout.tsx";
import RootRedirect from "@/routes/RootRedirect.tsx";

export const routes: RouteObject[] = [
    {
        path: "/",
        Component: RootRedirect,
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
