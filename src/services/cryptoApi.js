import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-key': 'coinranking1dc32fdf06bd0e31c5f85200a52920fd02604bd9b60e203c',
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



// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl'
//     },
//     headers: {
//       'x-rapidapi-key': '8fe0d4f1ecmsh7bd4fd0dc7f3a78p19539cjsn13167edd4ddd',
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }