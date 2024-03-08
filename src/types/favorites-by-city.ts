import Offer from './offer';

type City = string;

type FavoritesByCity = {
  [key: City]:Array<Offer>;
};

export default FavoritesByCity;
