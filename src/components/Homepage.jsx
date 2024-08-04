import React from "react";
import  icon  from "../images/btc-removebg-preview.png";
import "../App.css"


const Homepage = () => {

  return(
    <div className="flex justify-center items-center h-screen bg-gray-800">
    <img src={icon} alt="Logo" className="rotating-logo responsive-logo" />
  </div>
  );
 

};

export default Homepage;
