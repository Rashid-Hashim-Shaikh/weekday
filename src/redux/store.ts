/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import jdListReducer from './slices/jdListSlice';

export const store = configureStore({
  reducer: {
    jdList: jdListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
