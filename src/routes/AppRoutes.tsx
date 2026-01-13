import { routes } from "@/routes/routes.tsx";
import { useRoutes } from "react-router";

export default function AppRoutes() {
    return useRoutes(routes);
}