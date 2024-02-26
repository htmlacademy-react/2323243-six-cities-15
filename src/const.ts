import offers from './mocks/offers';

import { CityMap } from './mocks/city';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorite = '/favorites',
  Offer = '/offer/',
  NotFound = '/*',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',

}

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const CITIES_LOCATION: Array<CityMap> =
  offers.map((offer) => (
    {
      title: offer.city.name,
      lat: offer.city.location.latitude,
      lng: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    }
  ));


export {
  AppRoute,
  AuthStatus,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  CITIES_LOCATION,
};
