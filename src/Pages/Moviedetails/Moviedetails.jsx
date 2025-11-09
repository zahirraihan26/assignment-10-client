import React from "react";
import { FaStar, FaRegCalendar, FaRegClock, FaGlobe } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const Moviedetails = () => {
 const data = useLoaderData()
 const movie= data.result
//  console.log(movie)

 

  return (
    <div className="bg-[#232837] min-h-screen flex items-center px-8 py-10">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl mx-auto">
        
        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="rounded-2xl object-cover w-[320px] h-[450px] shadow-lg"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col items-start gap-3 mb-4 flex-wrap ">
            <h1 className="text-white text-4xl font-bold">{movie.title}</h1>
          <div className="flex gap-2">
              <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full font-semibold">
              {movie.genre}
            </span>
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
              {movie.language}
            </span>
          </div>
          </div>

          <div className="flex flex-wrap gap-10 mb-8">

            <div className="flex  items-center gap-2">
              <FaStar className="text-yellow-400 text-2xl" />
               
              <div className="flex flex-col">
               <span className="text-yellow-400 font-bold text-2xl">
                {movie.rating}
              </span>
              <div className="text-gray-400 text-sm ml-2">Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaRegCalendar className="text-red-400 text-2xl" />
             <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">
                {movie.releaseYear}
              </span>
              <div className="text-gray-400 text-sm ml-2">Year</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaRegClock className="text-red-400 text-2xl" />
             <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">
                {movie.duration}m
              </span>
              <div className="text-gray-400 text-sm ml-2">Duration</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaGlobe className="text-red-400 text-2xl" />
             <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">
                {movie.country}
              </span>
              <div className="text-gray-400 text-sm ml-2">Country</div>
              </div>
            </div>
          </div>

          {/* Plot Summary */}
          <div className="mb-4 flex flex-col md:items-start">
            <h2 className="text-white text-2xl font-bold mb-2">Plot Summary</h2>
            <p className="text-gray-200 leading-relaxed">{movie.plotSummary}</p>
          </div>

          {/* Director */}
          <div className="mb-4 flex flex-col md:items-start">
            <h2 className="text-white text-2xl font-bold mb-2">Director</h2>
            <p className="text-gray-200">{movie.director}</p>
          </div>

          {/* Cast */}
          <div className="mb-8 flex flex-col md:items-start">
            <h2 className="text-white text-2xl font-bold mb-2">Cast</h2>
            <p className="text-gray-200">{movie.cast}</p>
          </div>

          {/* Back Button */}
          <Link
            to='/'
            className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-medium 0 transition w-32"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
