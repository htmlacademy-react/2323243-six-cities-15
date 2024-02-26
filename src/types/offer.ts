import Host from './host';
import City from './city';
import Loc from './loc';

type Offer = {
  city: City;
  previewImage: string;
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  price: number;
  location: Loc;
  id: number;
  images: Array<string>;
  bedrooms: number;
  maxAdults: number;
  goods: Array<string>;
  host: Host;
  description: string;
}

export default Offer;
