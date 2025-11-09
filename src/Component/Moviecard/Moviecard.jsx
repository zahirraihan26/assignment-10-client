import React, { useEffect, useState } from "react";
import { FaStar, FaRegCalendar, FaRegClock } from "react-icons/fa";
import { Link } from "react-router"; // ✅ For navigation (optional)

const Moviecard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movie.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedMovies = data.sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies.slice(0, 5)); // ✅ only top 5
      })
      .catch((err) => console.error("Error loading movies:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-[#232837] rounded-2xl shadow-lg overflow-hidden flex flex-col w-full border border-gray-700 relative hover:scale-105 transition-transform"
        >
          {/* Poster & Genre */}
          <div className="relative">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <span className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-sm rounded-full px-4 py-1 font-semibold shadow">
              {movie.genre}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-3 left-3 flex items-center bg-[#232837]/90 px-3 py-1 rounded-lg shadow">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-yellow-400 font-bold">{movie.rating}</span>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h2 className="text-white text-xl font-bold mb-2">
              {movie.title}
            </h2>
            <div className="flex items-center text-gray-400 text-sm gap-4 mb-4">
              <span className="flex items-center gap-1">
                <FaRegCalendar /> {movie.releaseYear}
              </span>
              <span className="flex items-center gap-1">
                <FaRegClock /> {movie.duration}m
              </span>
            </div>

            {/* ✅ View Details Button */}
            <Link
              to={`/movies/${movie._id || index}`} 
              className="mt-auto bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-medium transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moviecard;

