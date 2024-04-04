import { AuthStatus, LoadingDataStatus } from '../const';
import { ActiveCity } from './city';
import { Favorite, Offer, SelectedOffer } from './offer';
import ReviewType from './review';
import { UserData } from './user-data';

type UserProcess = {
  authStatus: AuthStatus;
  userData: UserData;
}

type OffersData = {
  'offers': Offer[];
  'hasError': boolean;
  'isOffersLoading': boolean;

  'selectedOffer': null | SelectedOffer;
  'nearPlaces': Offer[];
  'reviews': ReviewType[];
  'offerDataStatusSending': LoadingDataStatus;

  'reviewStatusSending': LoadingDataStatus;

  'favs': Favorite[];
  'favsLoadingStatus': LoadingDataStatus;
}

type AppProcess = {
  'activeCity': ActiveCity;
  'favoritesNumber': number;
  'error': string | null;
}

export type {
  UserProcess,
  OffersData,
  AppProcess,
};
