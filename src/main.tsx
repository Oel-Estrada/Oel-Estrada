import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'next-themes';

import App from './App.tsx';

import '@/styles/App.css';

import './i18n/client';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <App />
        </ThemeProvider>
    </StrictMode>,
);
