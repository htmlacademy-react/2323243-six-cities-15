import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { APIRoute } from '../const';
import { isLoaded, setOffers } from './actions';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';


const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffers(data));
    dispatch(isLoaded());
  },
);


export {
  fetchOffersAction,
};
