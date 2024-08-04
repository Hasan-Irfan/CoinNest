import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptodetails,
  Cryptocurrencies,
  Globalstats,
} from "./components";

function App() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="flex-grow">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/globalstats" element={<Globalstats />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route exact path="/cryptodetails/:uuid" element={<Cryptodetails />} />
          </Routes>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Cryptoverse. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/" className="text-base hover:text-yellow-400">
              Home
            </Link>
            <Link
              to="/cryptocurrencies"
              className="text-base hover:text-yellow-400 ml-10"
            >
              Cryptocurrencies
            </Link>
            <Link
              to="/exchanges"
              className="text-base hover:text-yellow-400 ml-10"
            >
              Exchanges
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// <div className="App">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="main">
    //     <div className="routes">
    //       <Routes>
    //         <Route exact path="/" element={<Homepage />} />
    //         <Route exact path="/exchanges" element={<Exchanges />} />
    //         <Route
    //           exact
    //           path="/cryptocurrencies"
    //           element={<Cryptocurrencies />}
    //         />
    //         <Route exact path="/crypto/:coinId" element={<Cryptodetails />} />
    //       </Routes>
    //     </div>
    //   </div>
    //   <div className="footer">
    //     <footer className="bg-gray-900 text-white py-4">
    //       <div className="container mx-auto text-center">
    //         <p>&copy; 2024 Cryptoverse.<br/><br/> All rights reserved.</p>
    //         <div className="flex justify-center space-x-4 mt-2">
    //           <Link to="/" className="text-base hover:text-yellow-400">
    //             Home
    //           </Link>
    //           <Link
    //             to="/cryptocurrencies"
    //             className="text-base hover:text-yellow-400 ml-10"
    //           >
    //             Cryptocurrencies
    //           </Link>
    //           <Link
    //             to="/exchanges"
    //             className="text-base hover:text-yellow-400 ml-10"
    //           >
    //             Exchanges
    //           </Link>
    //         </div>
    //       </div>
    //     </footer>
    //   </div>
    // </div>