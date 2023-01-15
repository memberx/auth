import { createApi } from '@reduxjs/toolkit/query/react';
import { RegisterInput } from '../../pages/players.page';
import customFetchBase from './customFetchBase';
import { GenericResponse } from './types';

export const playersApi = createApi({
  reducerPath: 'playersApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation<GenericResponse, RegisterInput>({
      query(data) {
        return {
          url: 'player/register',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
} = playersApi;
