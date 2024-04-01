import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ActiveCity } from '../../types/city';
import { AppProcess } from '../../types/sliceTypes';

const initialState: AppProcess = {
  activeCity: 'Paris',
  favoritesNumber: 0,
  error: null,
};
const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<{city: ActiveCity}>) => {
      const { city } = action.payload;
      state.activeCity = city;
    },
    favoritesNumber: (state, action: PayloadAction<number>) => {
      state.favoritesNumber = state.favoritesNumber + action.payload;
    },
    setError:  (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers() {},
});

const {setCity, favoritesNumber, setError } = appProcess.actions;

export {appProcess,
  setCity,
  favoritesNumber,
  setError,
};
