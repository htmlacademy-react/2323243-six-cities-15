import Loc from './loc';

type City = {
  name: ActiveCity;
  location: Loc;
}

type ActiveCity = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'

export type {
  City,
  ActiveCity,
};
