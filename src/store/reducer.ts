/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createReducer } from '@reduxjs/toolkit';

import offers from '../mocks/offers';
import { setCity, setOffersAction } from './actions';

const initialState = {
  activeCity: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});


export default reducer;

