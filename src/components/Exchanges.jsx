import React from 'react';
import { useGetCoinExchangesQuery } from '../services/coinGeckoApi';
import { Loader } from "./Loader";

const Exchanges = () => {
  const { data, isFetching } = useGetCoinExchangesQuery();

  if (isFetching) return <Loader />;
  if (!data) return <div>No data available</div>;

  const Statistic = ({ title, logo ,link}) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
       <div className="p-8 border rounded-lg shadow-md flex justify-between">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-2xl font-bold">
      <img className="w-8 h-8" src={logo} alt="logo"/>
      </p>
    </div>
      </a>
   
  );

  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {data.map((data) => (
           <Statistic
           title={data.name}
           logo={data.image}
           link={data.url}
         />
        ))}
     
    </div>
  </div>
  );
};

export default Exchanges;
