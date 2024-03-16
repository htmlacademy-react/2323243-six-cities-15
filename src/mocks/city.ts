import City from '../types/city';

type CityMap = {
  title: City['name'];
  lat: number;
  lng: number;
  zoom: number;
} | undefined

type Point = {
  title: string;
  lat: number;
  lng: number;
}

const cities: Array<CityMap> = [
  {
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 12,
  },
  {
    title: 'Paris',
    lat: 0,
    lng: 0,
    zoom: 12,
  },
];

export {cities};
export type {CityMap, Point};


