import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-key': process.env.REACT_APP_COIN_RANKING_API_KEY,
    'x-rapidapi-host': 'api.coinranking.com/v2'
}

const baseUrl = 'https://api.coinranking.com/v2';

const createRequest =(url) => ({url, headers :cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery :fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCoins:builder.query({
            query: () => createRequest('/coins'),
        }),
        getCoinDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCoinHistory: builder.query({
            query: ({uuid,timePeriod}) => createRequest(`/coin/${uuid}/history?timeperiod=${timePeriod}`),
        }),
    })
});

export const {
    useGetCoinsQuery,
    useGetCoinDetailsQuery,
    useGetCoinHistoryQuery,
} = cryptoApi;

