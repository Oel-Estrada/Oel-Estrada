import { index, layout, prefix, route, type RouteConfig, } from "@react-router/dev/routes";

export default [
    index("routes/redirect-to-lang.ts"),
    ...prefix(":lang", [
        layout("routes/lang-layout.tsx", [
            route("*", "routes/catchall.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
