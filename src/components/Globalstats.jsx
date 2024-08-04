import React from 'react'
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../services/cryptoApi";
import { Loader } from "./Loader";

const Globalstats = () => {
 
    const { data, error, isLoading } = useGetCoinsQuery();
    const globalStats = data?.data?.stats;
  
    if (isLoading) {
      return (
        <div className="container mx-auto p-4">
          <Loader />
        </div>
      );
    } else if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      console.log(data);
    }
  
    const Statistic = ({ title, value }) => (
      <div className="p-8 border rounded-lg shadow-md">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Global Crypto Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats.totalCoins)}
          />
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
          <Statistic
            title="Total Market Cap"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </div>
      </div>
    );

}

export default Globalstats