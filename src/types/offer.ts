import Host from './host';
import { City } from './city';
import Loc from './loc';

type Offer = {
  id: number | string;
  title: string;
  type: string;
  price: number;
  previewImage?: string;
  city: City;
  location: Loc;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: Array<string>;
  host: Host;
  images: Array<string>;
  maxAdults: number;
}

type OfferServer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Loc;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: Array<string>;
  host: Host;
  images: Array<string>;
  maxAdults: number;
}

type NearOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Loc;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type FullOffers = Offer & {
  description: string;
  bedrooms: number;
  goods: Array<string>;
  host: Host;
  images: Array<string>;
  maxAdults: number;
}

export type { Offer, OfferServer, NearOffer, FullOffers };
