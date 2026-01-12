import { Links, Outlet, Scripts, ScrollRestoration, useParams } from "react-router";
import { Suspense } from "react";
import i18n from "i18next";

export function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const params = useParams();
    const lang = params.lang ?? i18n.language;

    return (
        <html lang={lang}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Links />
            </head>
            <body>
                <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return <Outlet />;
}
