import { createAction } from '@reduxjs/toolkit';
import { ActiveCity } from '../types/city';
import { Favs, Offer, SelectedOffer } from '../types/offer';
import ReviewType from '../types/review';
import { AuthStatus } from '../const';

const setCity = createAction<{ city: ActiveCity }>('setCity');

const setOffers = createAction<Offer[]>('setOffers');
const favoritesNumber = createAction<number>('favoritesNumber');

const fetchOffers = createAction<Offer[]>('fetchOffers');
const isLoaded = createAction('loaded');

const fetchSelectedOffer = createAction<SelectedOffer>('fetchOffer');
const isSelectedOfferLoaded = createAction('selectedOfferLoaded');
const fetchFavs = createAction<Favs[]>('fetchFavs');
const isFavsLoaded = createAction('favsLoaded');
const fetchNearPlaces = createAction<Offer[]>('fetchNearPlaces');
const isNearPlacesLoaded = createAction('nearPlacesLoaded');
const fetchReviews = createAction<ReviewType[]>('fetchReviews');
const isReviewsLoaded = createAction('reviewsLoaded');

const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');


export {
  setCity,
  setOffers,
  favoritesNumber,
  fetchOffers,
  isLoaded,
  fetchSelectedOffer,
  isSelectedOfferLoaded,
  fetchFavs,
  isFavsLoaded,
  fetchNearPlaces,
  isNearPlacesLoaded,
  fetchReviews,
  isReviewsLoaded,
  requireAuthorization,
};
