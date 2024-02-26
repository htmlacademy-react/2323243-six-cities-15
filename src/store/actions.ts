/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAction } from '@reduxjs/toolkit';
import { ActiveCity } from '../types/city';

// const setCity = createAction('setCity', (value) => (
//   {
//     payload: {
//       city: value,
//     }
//   }
// ));
const setCity = createAction<{city: ActiveCity}>('setCity');

const setOffers = createAction('setOffers', (value) => (
  { payload: value }
));

export {
  setCity,
  setOffers,
};
