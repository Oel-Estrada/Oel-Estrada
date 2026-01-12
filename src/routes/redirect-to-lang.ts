import { redirect } from "react-router";
import { DEFAULT_LANGUAGE } from "@/i18n/shared";

/**
 * Client loader to redirect to the default language route.
 */
export function clientLoader() {
    return redirect(`/${DEFAULT_LANGUAGE}`);
}
