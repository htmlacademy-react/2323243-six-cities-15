import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ActiveCity } from '../../types/city';
import { AppProcess } from '../../types/sliceTypes';

const initialState: AppProcess = {
  activeCity: 'Paris',
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

    setError:  (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

const {setCity, setError } = appProcess.actions;

export {appProcess,
  setCity,
  setError,
};
