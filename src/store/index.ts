import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';
import { createAPI } from '../services/apiService/api';

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});

export default store;

