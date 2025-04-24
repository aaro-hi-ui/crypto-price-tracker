import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice'; // Import your slice reducer

// Configure the store with your slice
const store = configureStore({
  reducer: {
    crypto: cryptoReducer, // Add more slices here if needed
  },
});

export default store; // Export the store to use it in your app
