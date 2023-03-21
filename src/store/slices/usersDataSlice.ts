import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersDataApi } from '../apiActions/usersDataApi';

const initialState: userDataType = {
  loading: false,
  data: null,
  error: '',
};

export const getUsersData = createAsyncThunk('slices/getUsersData', async () => {
  return usersDataApi();
});

const usersDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersData.pending, state => {
      state.loading = true;
      state.data = null;
    });
    builder.addCase(getUsersData.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message || 'something went wrong';
    });
    builder.addCase(getUsersData.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
  },
});

export default usersDataSlice.reducer;
