import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

require('dotenv').config();

const Key = process.env.KEY;
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', Key);

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
