import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cardsDataApi } from '../apiActions/cardsDataApi';

const initialState: cardsDataType = {
  loading: false,
  data: null,
  error: '',
};

export const getCardsData = createAsyncThunk('slices/getCardsData', async () => {
  return cardsDataApi();
});

const cardsData = createSlice({
  name: 'cardsData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCardsData.pending, state => {
      state.loading = true;
      state.data = null;
    });
    builder.addCase(getCardsData.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message || 'something went wrong';
    });
    builder.addCase(getCardsData.fulfilled, (state, action: PayloadAction<cardType[]>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
  },
});

export default cardsData.reducer;
