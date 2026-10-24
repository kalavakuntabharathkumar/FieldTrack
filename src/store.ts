import { configureStore } from '@reduxjs/toolkit';
import visitsReducer from './features/visits/visitsSlice';
export const store = configureStore({ reducer:{ visits:visitsReducer } });
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
