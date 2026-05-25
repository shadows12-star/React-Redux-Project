import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './Features/searchslice';
import collectionReducer from './Features/collectionslice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,

  },
})