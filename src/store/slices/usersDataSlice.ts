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
  reducers: {
    updateAttendanceStore(state, action: PayloadAction<{ userId: string; attendance: number }>) {
      // to update attendance on store
      state.data?.map((user: userType, index) => {
        if (action.payload.userId === user.id && state.data !== null) state.data[index].attendance = action.payload?.attendance;
      });
    },
    updatePhotoIdStore(state, action: PayloadAction<{ userId: string; photoId: boolean }>) {
      // to update photoId on store
      state.data?.map((user: userType, index) => {
        if (action.payload.userId === user.id && state.data !== null) state.data[index].photo_id = action.payload?.photoId;
      });
    },
    clearUsers(state) {
      // to clear user data in store
      state.data = null;
    },
  },
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

export const { updateAttendanceStore, updatePhotoIdStore, clearUsers } = usersDataSlice.actions;

export default usersDataSlice.reducer;
