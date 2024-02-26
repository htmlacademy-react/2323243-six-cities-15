import Loc from './loc';

type City = {
  name: ActiveCity;
  location: Loc;
}

type ActiveCity = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'

type CityLocationType = {
  title: City['name'];
  lat: number;
  lng: number;
  zoom: number;
}

export type {
  City,
  ActiveCity,
  CityLocationType
};
