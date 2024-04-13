import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import { createAPI } from '../services/apiService/api';

const api = createAPI();

type RootState = ReturnType<typeof rootReducer>

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
    preloadedState
  })
}
