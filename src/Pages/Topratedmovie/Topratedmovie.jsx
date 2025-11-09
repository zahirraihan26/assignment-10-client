import React, { useEffect, useState } from "react";
import Moviecard from "../../Component/Moviecard/Moviecard";

const Topratedmovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => {
        // Sort by rating (highest → lowest)
        const sorted = data.sort((a, b) => b.rating - a.rating);
        // Take top 5 movies
        const topFive = sorted.slice(0, 5);
        setMovies(topFive);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Moviecard key={movie._id} movie={movie} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            Loading top-rated movies...
          </p>
        )}
      </div>
    </div>
  );
};

export default Topratedmovie;
