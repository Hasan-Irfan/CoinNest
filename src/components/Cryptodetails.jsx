import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCoinDetailsQuery,useGetCoinHistoryQuery } from "../services/cryptoApi";
import { Loader } from "./Loader";
import LineChart from './LineChart';

const Cryptodetails = () => {
  const { uuid } = useParams();
  const [timePeriod, setTimePeriod]   = useState("7d");
  const { data, error, isLoading } = useGetCoinDetailsQuery(uuid);
  const { data :coinHistory, isFetching } = useGetCoinHistoryQuery({uuid,timePeriod});
  const cryptoDetails = data?.data?.coin;

  if (isLoading) return <Loader />;
  if (isFetching) return <Loader />;
  if (error) return <div>Error</div>;
  console.log(coinHistory);
 

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
    },
    { title: "Rank", value: cryptoDetails?.rank },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: cryptoDetails?.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails?.numberOfExchanges },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
    },
  ];

  

  return (
    <div className="flex flex-col p-5 space-y-5">
      <div className="flex flex-col mb-4">
        <h2 className="text-2xl font-semibold">
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </h2>
        <p className="text-gray-600">
          {cryptoDetails.name} live price in US Dollar (USD). View value
          statistics, market cap, and supply.
        </p>
      </div>
      <select
        defaultValue="7d"
        className="flex w-20 bg-gray-200 border-gray-900 border-solid"
        placeholder="Select Timeperiod"
        onChange={(e) => setTimePeriod(e.target.value)}
      >
        {time.map((date) => (
          <option key={date}>{date}</option>
        ))}
      </select>
      <LineChart 
        coinHistory={coinHistory} 
        currentPrice={millify(cryptoDetails?.price)} 
        coinName={cryptoDetails?.name} 
      />

      <div className="flex gap-10 ">
        <div className="bg-white p-5 rounded shadow-md w-3/6">
          <h3 className="text-lg font-semibold mb-2">
            {cryptoDetails.name} Value Statistics
          </h3>
          <p className="text-gray-600 mb-4">
            An overview showing the statistics of {cryptoDetails.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>
          <div className="space-y-2">
            {stats.map((stats) => (
              <div
                key={stats.title}
                className="flex justify-between items-center"
              >
                <div className="flex items-center space-x-2">
                  <span>{stats.icon}</span>
                  <span className="font-medium">{stats.title}</span>
                </div>
                <span className="font-semibold">{stats.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded shadow-md w-3/6">
          <h3 className="text-lg font-semibold mb-2">Other Statistics</h3>
          <p className="text-gray-600 mb-4">
            An overview showing the statistics of other currencies
          </p>
          <div className="space-y-2">
            {genericStats.map((genericStats) => (
              <div
                key={genericStats.title}
                className="flex justify-between items-center"
              >
                <div className="flex items-center space-x-2">
                  <span>{genericStats.icon}</span>
                  <span className="font-medium">{genericStats.title}</span>
                </div>
                <span className="font-semibold">{genericStats.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{`What is ${cryptoDetails.name}?`}</h3>
          <p>{HTMLReactParser(cryptoDetails.description)}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{`${cryptoDetails.name} Links`}</h3>
          {cryptoDetails.links?.map((link) => (
            <div className="flex items-center space-x-2" key={link.name}>
              <h5 className="text-lg font-medium">{link.type}</h5>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cryptodetails;
