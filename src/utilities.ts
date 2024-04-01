import dayjs from 'dayjs';
import store from './store';
import { clearErrorAction } from './store/api-actions';
import { setError } from './store/app-process/app-process-slice';
import { Offer } from './types/offer';

function replaceFavoriteOffer (offers: Offer[], offer: Offer) {
  const items = offers.map((it) => {
    if (it.id === offer.id) {
      it.isFavorite = !it.isFavorite;
    }
    return it;
  });
  return items;

}

function getRatingValue(rating: number) {
  return (Math.round(rating) * 100) / 5;
}

function pickRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function formatDate(value: dayjs.ConfigType, full: boolean = false): string {
  return dayjs(value).format(full ? 'MMMM YYYY' : 'YYYY-MM-DD');
}

function processErrorHandle(message: string): void {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
}

function dateInMs(value: string) {
  return Date.parse(value);
}

export {
  replaceFavoriteOffer,
  getRatingValue,
  pickRandomElement,
  formatDate,
  processErrorHandle,
  dateInMs,
};
