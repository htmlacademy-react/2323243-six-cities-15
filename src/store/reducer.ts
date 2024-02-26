/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createReducer} from '@reduxjs/toolkit';

import offers from '../mocks/offers';
import { setCity, setOffers } from './actions';
import { ActiveCity } from '../types/city';
import { Offer } from '../types/offer';

type InitialState = {
  activeCity: ActiveCity;
  offers: Array<Offer>;
}
const initialState: InitialState = {
  activeCity: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const {city} = action.payload;
      state.activeCity = city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});


export default reducer;

