import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, COUNTRIES } from '../utils/apiConstant';
// import { BASE_URL, COUNTRIES } from '../utils/apiConstants';

// Hardcoded token
const TOKEN = "2127|pAEKcLHSFopo0TzRuL6fzfo8V5A1RXPEubGLq3FG";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    if (TOKEN) {
      headers.set('Authorization', `Bearer ${TOKEN}`);
    }

    return headers;
  },
});

export const countriesApiSlice = createApi({
  reducerPath: 'countriesApi',
  baseQuery,
  tagTypes: ['all_countries', 'all_states'],
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: (name = '') => ({
        url: name ? `/name/${name}` : COUNTRIES,
      }),
      providesTags: ["all_countries"],
    }),
    getStates: builder.query({
      query: (name) => ({
        url: `${COUNTRIES}/${name}/states`,
      }),
      providesTags: ["all_states"],
    }),
  }),
});

export const { 
  useGetCountriesQuery ,
  useGetStatesQuery,
} = countriesApiSlice;
