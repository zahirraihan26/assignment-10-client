import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router";

const Banner = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch top 3 movies
    fetch("https://movie-master-pro-server-tau.vercel.app/topMovies")
      .then((res) => res.json())
      .then((data) => {

        setTopMovies(data.topMovies)
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topMovies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [topMovies]);

  if (loading) return <Loading></Loading>

  if (topMovies.length === 0) return null; // Loading state

  return (
    <div className="relative max-w-full h-150 rounded-2xl overflow-hidden">
      {topMovies.map((movie, idx) => (
        <div
          key={movie._id}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-left text-white max-w-md">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="my-2 text-lg">⭐ {movie.rating}</p>
            <Link to='/movies' className="text-white px-5 py-3 rounded-xl font-bold mt-3 bg-orange-500 transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(249,115,22,0.6)]">
              Browse Movies
            </Link>
          </div>
        </div>
      ))}

      {/* Optional: Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {topMovies.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === currentSlide ? "bg-orange-500" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
