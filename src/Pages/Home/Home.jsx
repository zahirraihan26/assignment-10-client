import React from "react";
import img from "../../assets/hero-cinema.jpg";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src={img}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12">
        
        {/* Headings */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
          Your Ultimate
        </h1>

        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Movie Collection
        </h1>

        {/* Subtitle */}
        <p className="text-blue-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-xl sm:max-w-2xl">
          Discover, manage, and organize your favorite films in one beautiful place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <button className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white hover:scale-105 transition-transform duration-200 text-white font-semibold py-3 px-8 rounded-lg text-sm sm:text-base">
            Browse Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
