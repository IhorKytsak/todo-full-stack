import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';

import AppContainer from './modules/app';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
