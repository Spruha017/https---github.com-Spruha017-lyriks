import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '8c53fcde77mshd2615a46eb4ab01p1e4b4ajsne87fa5398561');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/track',
      transformResponse: (response) => response.tracks,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
