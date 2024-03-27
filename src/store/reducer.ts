/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createReducer } from '@reduxjs/toolkit';

import { setFavs, setNearPlaces, setSelectedOffer, setReviews,
  isLoaded, setCity, setOffers, isSelectedOfferLoaded, isFavsLoaded,
  isNearPlacesLoaded, isReviewSending, favoritesNumber, requireAuthorization,
  setError, setUserData } from './actions';
import { AuthStatus } from '../const';

import { ActiveCity } from '../types/city';
import { Favs, Offer, SelectedOffer } from '../types/offer';
import ReviewType from '../types/review';
import { UserData } from '../types/user-data';

type InitialState = {
  activeCity: ActiveCity;
  favoritesNumber: number;

  offers: Array<Offer>;
  isLoaded: boolean;
  error: string | null;

  selectedOffer: SelectedOffer | null;
  isSelectedOfferLoaded: boolean;

  favs: Favs[];
  isFavsLoaded: boolean;

  nearPlaces: Offer[];
  isNearPlacesLoaded: boolean;

  reviews: ReviewType[];
  isReviewSending: boolean;

  authStatus: AuthStatus;
  UserData: UserData | null;
}
const initialState: InitialState = {
  activeCity: 'Paris',
  favoritesNumber: 0,

  offers: [],
  isLoaded: false,
  error: null,

  selectedOffer: null,
  isSelectedOfferLoaded: false,

  favs: [],
  isFavsLoaded: false,

  nearPlaces: [],
  isNearPlacesLoaded: false,

  reviews: [],
  isReviewSending: false,

  authStatus: AuthStatus.Unknown,
  UserData: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const { city } = action.payload;
      state.activeCity = city;
    })
    .addCase(favoritesNumber, (state, action) => {
      state.favoritesNumber = state.favoritesNumber + action.payload;
    })

    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(isLoaded, (state, action) => {
      state.isLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(isSelectedOfferLoaded, (state) => {
      state.isSelectedOfferLoaded = true;
    })

    .addCase(setFavs, (state, action) => {
      state.favs = action.payload;
    })
    .addCase(isFavsLoaded, (state) => {
      state.isFavsLoaded = true;
    })

    .addCase(setNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(isNearPlacesLoaded, (state) => {
      state.isNearPlacesLoaded = true;
    })

    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(isReviewSending, (state, action) => {
      state.isReviewSending = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.UserData = action.payload;
    });
});


export default reducer;

