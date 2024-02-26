import { CityLocationType } from './types/city';

const TIMEOUT_SHOW_ERROR = 2000;

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

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  SelectedOffer = '/offers/',
  Reviews = '/comments/',
  Nearby = '/nearby',
  PostReview = '/comments',
  Favorite = '/favorite',
}

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const CITIES_LOCATION: Array<CityLocationType> = [
  {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 13,
  },
  {
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 13,
  },
  {
    title: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 13,
  },
  {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  {
    title: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 13,
  },
  {
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 13,
  },
];


export {
  TIMEOUT_SHOW_ERROR,
  AppRoute,
  AuthStatus,
  APIRoute,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  CITIES_LOCATION,
};
