import { useRoutes } from 'react-router';

import { routes } from '@/routes/routes.tsx';

export default function AppRoutes() {
    return useRoutes(routes);
}
