import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { trainingDataApi } from '../apiActions/trainingDataApi';
const initialState: trainingDataType = { loading: false, data: null, error: '' };
export const getTrainingData = createAsyncThunk('slices/getTrainingData', async () => {
  return await trainingDataApi();
});
const trainingDataSlice = createSlice({
  name: 'trainingData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTrainingData.pending, state => {
      state.loading = true;
      state.data = null;
      state.error = '';
    });
    builder.addCase(getTrainingData.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message || 'something went wrong';
    });
    builder.addCase(getTrainingData.fulfilled, (state, action: PayloadAction<trainingType[]>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
  },
});
export default trainingDataSlice.reducer;
