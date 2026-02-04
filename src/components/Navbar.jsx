import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-xl font-bold">Ramazan App</h1>

          {/* Menu */}
          <ul className="flex gap-6 text-sm font-medium">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/hadess" className="hover:text-yellow-300">Hadees</Link></li>
            <li><Link to="/ramazan-days" className="hover:text-yellow-300">Ramazan Days</Link></li>
            <li><Link to="/sehri-iftari" className="hover:text-yellow-300">Sehri & Iftar</Link></li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
