import { configureStore } from '@reduxjs/toolkit';
import cardsDataSlice from './slices/cardsDataSlice';
import usersDataSlice from './slices/usersDataSlice';
import trainingDataSlice from './slices/trainingDataSlice';

export const store = configureStore({
  reducer: {
    usersData: usersDataSlice,
    cardsData: cardsDataSlice,
    trainingData: trainingDataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
