import React from 'react';
import { Link } from "react-router";
import { Film, Facebook, Github } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B222C] text-gray-300   left-0  pt-10 mt-16">
      
      {/* Main Content - Full Width */}
      <div className="w-full px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Film className="w-6 h-6 text-[#FF3B3B]" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] bg-clip-text text-transparent">MovieMaster Pro</h2>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Your ultimate destination for discovering, managing, and organizing
            your favorite movies. Build your collection, track ratings, and
            never miss a great film.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/movies" className="hover:text-yellow-400">All Movies</Link></li>
            <li><Link to="/collection" className="hover:text-yellow-400">My Collection</Link></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <div className='flex gap-4'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter  className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-transform transform hover:scale-110"></FaXTwitter>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-transform transform hover:scale-110" ></Facebook>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-transform transform hover:scale-110" ></Github>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Line */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © 2025 <span className="text-yellow-400 font-semibold">MovieMaster Pro</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
