import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authApi } from './api/authApi';
import { postApi } from './api/postApi';
import { playersApi } from './api/playersApi';
import { playerApi } from './api/playerApi';
import { userApi } from './api/userApi';
import { customApi } from './api/customApi';
import userReducer from './features/userSlice';
import playersReducer from './features/playersSlice';
import postReducer from './features/postSlice';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [customApi.reducerPath]: customApi.reducer,
    [playersApi.reducerPath]: playersApi.reducer,
    [playerApi.reducerPath]: playerApi.reducer,
    // Connect the PostApi reducer to the store
    [postApi.reducerPath]: postApi.reducer,
    userState: userReducer,
    playersState: playersReducer,
    postState: postReducer,
    playerState: playerReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      customApi.middleware,
      playersApi.middleware,
      playerApi.middleware,
      // Add the PostApi middleware to the store
      postApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
