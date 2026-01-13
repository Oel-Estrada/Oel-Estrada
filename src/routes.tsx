import { Navigate, type RouteObject } from "react-router-dom";
import ComingSoon from "@/pages/ComingSoon/ComingSoon.tsx";
import LangLayout from "@/routes/lang-layout.tsx";
import i18n from "@/i18n/client";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to={`/${i18n.language}`} replace />,
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
