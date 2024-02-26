import {City} from './city';
import Loc from './loc';

type OfferPreview = {
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
}

export default OfferPreview;
