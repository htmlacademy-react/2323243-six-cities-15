import { AxiosInstance } from 'axios';
import store from '../store/index.ts';

type State = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type ThunkAPI = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}

export type {
  State,
  AppDispatch,
  ThunkAPI,
};
