import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // Array to hold crypto asset data
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoData: (state, action) => {
      state.data = action.payload; // Replace state data with new data
    },
  },
});

export const { updateCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
