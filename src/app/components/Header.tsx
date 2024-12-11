import React from 'react';
import { CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";

const Header = () => {
  return (
    <header className="bg-cover bg-center text-cyan-50 bg-no-repeat h-screen  w-full" style={{ backgroundImage: "url('Header hero.png')" }}>
  <img src="Foodtuck.png" alt="Foodtuck Logo" className="absolute top-10 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-48" />
  <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 md:p-8 lg:p-12">
    <div className="sm:flex-col  items-center">
      <a href="/" className="mr-5 hover:text-orange-500 text-sm md:text-base lg:text-lg">Home</a>
      <a href="/menu" className="mr-5 hover:text-orange-500 text-sm md:text-base lg:text-lg">Menu</a>
      <a href="/blog" className="mr-5 hover:text-orange-500 text-sm md:text-base lg:text-lg">Blog</a>
      <a href="/pages" className="mr-5 hover:text-orange-500 text-sm md:text-base lg:text-lg">Pages</a>
      <a href="/about" className="mr-5 hover:text-orange-500 text-sm md:text-base lg:text-lg">About</a>
      <a href="/shop" className="mr-5 hover:text-orange-500 text-sm md:text-base lg:text-lg">Shop</a>
      <a href="/contact" className="mr-5 hover:text-orange-500 text-sm md:text-base lg:text-lg">Contact</a>
    </div>
    {/* ... rest of your header content ... */}
  <div className="flex items-center">
          
          {/* Large Screen Navigation */}
          <div className=" lg:flex items-center justify-between flex-1 ml-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border-2 bg-transparent border-orange-500 rounded-full px-3 py-2 pr-8 md:w-64 lg:w-80" // Adjust the width here
              />
              <CiSearch size={20} className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white" />
            </div>
            <div className="ml-8">
              <PiHandbagBold className="text-white text-2xl hover:text-orange-500 transition" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;