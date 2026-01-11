import { Links, Meta, Outlet, Scripts, ScrollRestoration, } from "react-router";
import { Suspense } from "react";
import { SUPPORTED_LANGUAGES } from "@/i18n.ts";

interface MetaData {
    title?: string;
    description?: string;
    lang?: string;
}

export function Layout({
    children,
    _meta,
}: {
    children: React.ReactNode;
    _meta?: MetaData;
}) {
    const title = _meta?.title ?? "Oel Estrada";
    const description = _meta?.description;
    const lang = _meta?.lang ?? SUPPORTED_LANGUAGES[0];

    return (
        <html lang={lang}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{title}</title>
                {description && <meta name="description" content={description} />}
                <Meta />
                <Links />
            </head>
            <body>
                <Suspense fallback={<div>Loading...</div>}>
                    {children}
                </Suspense>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return <Outlet />;
}
