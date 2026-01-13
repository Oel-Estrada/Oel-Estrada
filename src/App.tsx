import { BrowserRouter, useRoutes } from 'react-router-dom';
import '@/styles/App.css';
import { routes } from './routes';

function AppRoutes() {
    return useRoutes(routes);
}

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
