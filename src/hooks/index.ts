import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../types/state';
import { State } from '../types/state';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export {
  useAppDispatch,
  useAppSelector,
};
