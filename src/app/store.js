import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi'; 
import { coinGeckoApi } from '../services/coinGeckoApi'; 

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(coinGeckoApi.middleware),
});