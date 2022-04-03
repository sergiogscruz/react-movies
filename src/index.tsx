import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Falha ao carregar elemento root');

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
