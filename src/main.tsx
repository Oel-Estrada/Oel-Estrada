import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import App from './App';

import './i18n';

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <Suspense fallback="Loading...">
                <App/>
            </Suspense>
        </StrictMode>,
    );
}  
