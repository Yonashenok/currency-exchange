import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import movieReducer from './movie/movieSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  movies: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
