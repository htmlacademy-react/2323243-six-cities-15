/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAction } from '@reduxjs/toolkit';

const setCity = createAction('setCity', (value) => (
  { payload: value }
));

const setOffersAction = createAction('setOffers', (value) => (
  { payload: value }
));

export {
  setCity,
  setOffersAction,
};
