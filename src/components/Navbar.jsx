import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/papua-new-guinea-bitcoin-cryptocurrency-exchange-bitcoin-png.jpg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
    <div className="flex justify-between items-center h-24 px-5 lg:px-7">
      {/* <div>
        <img className="h-10" src={logo} alt="logo" />
      </div> */}
      <div className="text-4xl">CoinNest</div>
      <div className="hidden md:flex space-x-10">
        <Link to="/" className="text-xl hover:text-yellow-400">Home</Link>
        <Link to="/globalstats" className="text-xl hover:text-yellow-400">GlobalStats</Link>
        <Link to="/cryptocurrencies" className="text-xl hover:text-yellow-400">Cryptocurrencies</Link>
        <Link to="/exchanges" className="text-xl hover:text-yellow-400">Exchanges</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden flex flex-col space-y-4 px-5 pb-4">
        <Link to="/" className="text-xl hover:text-yellow-400" onClick={toggleMenu}>Home</Link>
        <Link to="/globalstats" className="text-xl hover:text-yellow-400" onClick={toggleMenu}>GlobalStats</Link>
        <Link to="/cryptocurrencies" className="text-xl hover:text-yellow-400" onClick={toggleMenu}>Cryptocurrencies</Link>
        <Link to="/exchanges" className="text-xl hover:text-yellow-400" onClick={toggleMenu}>Exchanges</Link>
      </div>
    )}
  </div>
  );
}

export default Navbar;
