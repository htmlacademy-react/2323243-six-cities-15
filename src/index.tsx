import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

import offers from './mocks/offers';
import upcomingOffers from './mocks/upcoming-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      upcomingOffers={upcomingOffers}
    />
  </React.StrictMode>
);
