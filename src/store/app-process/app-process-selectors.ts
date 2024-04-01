import { NameSpace } from '../../const';
import { ActiveCity } from '../../types/city';
import { State } from '../../types/state';

const getActiveCity = (state: State): ActiveCity => state[NameSpace.App].activeCity;
const getError = (state: State): string | null => state[NameSpace.App].error;
const getFavsNumber = (state: State): number => state[NameSpace.App].favoritesNumber;

export {
  getActiveCity,
  getError,
  getFavsNumber,
};
