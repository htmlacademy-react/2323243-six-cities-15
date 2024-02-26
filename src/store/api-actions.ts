import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';

import { APIRoute, AuthStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { isLoaded, requireAuthorization, setUserData, setError, setOffers, setSelectedOffer, setNearPlaces, setReviews } from './actions';
import { dropToken, saveToken } from '../services/apiService/token';

import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Offer, SelectedOffer } from '../types/offer';
import ReviewType from '../types/review';


const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api, }) => {
    try {
      dispatch(isLoaded(false));
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(setOffers(data));
      setTimeout(() => dispatch(isLoaded(true)), 500);

    } catch (error) {
      dispatch(setError(String(error)));
      throw error;
    }
  }
);

const fetchSelectedOfferDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchSelectedOfferData',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(isLoaded(false));
    const offerPath = APIRoute.SelectedOffer + offerId;
    const nearbyPath = `${APIRoute.SelectedOffer}${offerId}/nearby`;
    const commentsPath = APIRoute.Reviews + offerId;
    try {
      const [selectedOffer, nearbyOffers, comments] = await Promise.all(
        [
          api.get<SelectedOffer>(offerPath),
          api.get<Offer[]>(nearbyPath),
          api.get<ReviewType[]>(commentsPath),
        ]
      );

      dispatch(setSelectedOffer(selectedOffer.data));
      dispatch(setNearPlaces(nearbyOffers.data));
      dispatch(setReviews(comments.data));
      setTimeout(() => dispatch(isLoaded(true)), 500);

    } catch (err) {
      if (err instanceof AxiosError) {
        dispatch(setError(String(err)));
        throw err;
      }
    }
  }
);


const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>('user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  });

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>('user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    if (data) {
      const token = data.token;
      saveToken(token);
      dispatch(requireAuthorization(AuthStatus.Auth));
      dispatch(setUserData(data));
    }
  });

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NoAuth));
    dispatch(setUserData(null));
  });

const clearErrorAction = createAsyncThunk('app/clearError',
  (_arg, { dispatch }) => {
    setTimeout(
      () => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  });


export {
  fetchOffersAction,
  fetchSelectedOfferDataAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  clearErrorAction,
};
