import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice'; // We'll create `cryptoSlice.js` next

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
