import React from 'react';
import { FaUser, FaSearch, FaShoppingCart, FaBell, FaHeart, FaHome, FaBars } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className="w-full flex flex-col p-2"> 
  <div className="bg-blue-950 text-white p-2 flex justify-between items-center rounded-3xl">
    
    <a href="">
      <div className="flex items-center">
        <FaUser size={25} />
        <span className="ml-2 hidden sm:inline">Akshay Sasikumar</span>
      </div>
    </a>

    
    <div className="flex items-center md:w-1/2 gap-2 justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-3xl p-2 focus:outline-none"
      />
      <button className="flex bg-white text-blue-950 rounded-full w-10 h-10 items-center justify-center">
        <FaSearch />
      </button>
    </div>
    
    <div className="flex items-center gap-2 sm:ml-3">
      <a href=""><FaShoppingCart className="hidden sm:inline" size={25} /></a>
      <a href=""><FaBell className="hidden sm:inline" size={25} /></a>
      <a href=""><FaHeart className="hidden sm:inline" size={25} /></a>
      <a href=""><FaBars className="block sm:hidden" size={25} /></a>
    </div>
  </div>

  <div className="text-black p-2 flex justify-between items-center bg-white border-gray-400 rounded">
    <div className="flex items-center sm:w-1/4">
      <FaHome className="mr-2" size={25} />
      <span className="text-lg font-bold">Hygiene Platform</span>
    </div>
    
    <div className="flex items-center justify-center space-x-6 text-md sm:w-1/2">
      <a href="#products" className="hover:underline">Home</a>
      <a href="#cart" className="hover:underline">Products</a>
      <a href="#about" className="hover:underline">Contacts</a>
    </div>
    
    <div className="flex items-center justify-end gap-2 sm:w-1/4">
      <a href=""><FaBell className="hidden sm:inline" size={25} /></a>
      <a href=""><FaHeart className="hidden sm:inline" size={25} /></a>
      <a href=""><FaUser className="hidden sm:inline" size={25} /></a>
      <a href=""><FaChevronDown className="block sm:hidden" size={25} /></a>
    </div>
  </div>
</div>

  );
};

export default Navbar;
