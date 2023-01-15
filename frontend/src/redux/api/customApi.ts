import { createApi } from '@reduxjs/toolkit/query/react';
import { setPlayers } from '../features/playersSlice';
import customFetchBase from './customFetchBase';
import { IPlayers } from './types';

export const customApi = createApi({
  reducerPath: 'customApi',
  baseQuery: customFetchBase,
  tagTypes: ['Players'],
  endpoints: (builder) => ({
    getMe: builder.query<IPlayers, null>({
      query() {
        return {
          url: 'players',
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { players: IPlayers } }) =>
        result.data.players,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setPlayers(data));
        } catch (error) {}
      },
    }),
  }),
});
