import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import {offersData} from './offer-data/offer-data-slice';
import {appProcess} from './app-process/app-process-slice';
import userProcess from './users-process/user-process-slice';

const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});

export default rootReducer;

