import dayjs from 'dayjs';
import store from './store';
import { clearErrorAction } from './store/api-actions';
import { setError } from './store/app-process/app-process-slice';

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
  getRatingValue,
  pickRandomElement,
  formatDate,
  processErrorHandle,
  dateInMs,
};
