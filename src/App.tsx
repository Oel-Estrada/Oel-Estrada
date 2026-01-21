import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '@/routes/AppRoutes.tsx';

/**
 * The main application component that sets up routing.
 */
function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
