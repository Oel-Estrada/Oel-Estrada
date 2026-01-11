import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import '@/styles/index.css';

import './i18n';

ReactDOM.hydrateRoot(
    document,
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <HydratedRouter />
        </Suspense>
    </React.StrictMode>,
);
