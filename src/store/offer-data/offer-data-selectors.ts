import { NameSpace } from '../../const';
import { Favorite, Offer, SelectedOffer } from '../../types/offer';
import ReviewType from '../../types/review';
import { State } from '../../types/state';

const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
const getSelectedOffer = (state: State): SelectedOffer | null => state[NameSpace.Data].selectedOffer;
const getNearPlaces = (state: State): Offer[] => state[NameSpace.Data].nearPlaces;
const getReviews = (state: State): ReviewType[] => state[NameSpace.Data].reviews;
const getFavs = (state: State): Favorite[] => state[NameSpace.Data].favs;

const getIsReviewSending = (state: State): boolean => state[NameSpace.Data].isReviewSending;
const getIsLoaded = (state: State): boolean => state[NameSpace.Data].isLoaded;
const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;


export {
  getOffers,
  getSelectedOffer,
  getNearPlaces,
  getReviews,
  getFavs,


  getIsReviewSending,
  getIsLoaded,
  getErrorStatus,
};
