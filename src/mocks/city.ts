type CityMap = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

type Point = {
  title: string;
  lat: number;
  lng: number;
}

const city: CityMap = {
  title: 'Amsterdam',
  lat: 52.37454,
  lng: 4.897976,
  zoom: 12,
};

export {city};
export type {CityMap, Point};


