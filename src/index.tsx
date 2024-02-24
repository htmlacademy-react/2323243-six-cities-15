import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
  // <React.StrictMode>
  //   <h1>Hello, World!</h1>
  // </React.StrictMode>
);
