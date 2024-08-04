import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../services/cryptoApi";
import { Loader } from "./Loader";

const Cryptocurrencies = () => {
  const { data, error, isLoading } = useGetCoinsQuery();
  const globalStats = data?.data?.coins;

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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Top Cryptocurrencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {globalStats?.map((coin) => (
          <div key={coin.id} className="p-8 border rounded-lg shadow-md">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold"> {coin.rank}. {coin.name}</h3>
              <img className="w-8 h-8" src={coin.iconUrl} alt="logo"/>
            </div>

            <p className="text-lg font-medium">Price: {millify(coin.price)}</p>
            <p className="text-lg font-medium">
              MarketCap: {millify(coin.marketCap)}
            </p>
            <p className="text-lg font-medium">
              Daily Change: {millify(coin.change)}
            </p>
            <Link to={`/cryptodetails/${coin.uuid}`} className="text-base  hover:text-yellow-400">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
