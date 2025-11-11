import React, { useEffect, useState } from "react";
import Moviecard from "../../Component/Moviecard/Moviecard";
import Loading from "../../Component/Loading/Loading";

const Topratedmovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())  
      
      .then((data) => {
        const sorted = data.sort((a, b) => b.rating - a.rating);

        const topFive = sorted.slice(0, 5);
        setMovies(topFive);
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="p-6">
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <Moviecard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No movies found.</p>
      )}
    </div>
  );
};

export default Topratedmovie;
