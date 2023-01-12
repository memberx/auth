import { createApi } from '@reduxjs/toolkit/query/react';
import { setPlayer } from '../features/playerSlice';
import customFetchBase from './customFetchBase';
import { IPlayer } from './types';

export const playerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: customFetchBase,
  tagTypes: ['Player'],
  endpoints: (builder) => ({
    getMe: builder.query<IPlayer, null>({
      query() {
        return {
          url: 'users/me',
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { user: IPlayer } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setPlayer(data));
        } catch (error) {}
      },
    }),
  }),
});
