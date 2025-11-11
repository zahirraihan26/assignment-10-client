import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Moviecard from '../../Component/Moviecard/Moviecard';

const Mywatchlist = () => {
  const { user } = useContext(AuthContext);
  const [movie, setmovie] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setloading(true);
    fetch(`http://localhost:3000/mywatchlist?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setmovie(data);
        setloading(false);
      })
      .catch(err => {
        console.error("Failed to fetch watchlist:", err);
        setloading(false);
      });
  }, [user?.email]);

  if (!user) {
    return <p className="text-center text-4xl text-gray-400 mt-10">Please login to see your watchlist.</p>;
  }

  if (loading) {
    return <p className="text-center text-4xl text-gray-400 mt-10">Loading your watchlist...</p>;
  }

  if (movie.length === 0) {
    return <p className="text-center text-4xl text-gray-400 mt-10">No movies in your watchlist yet.</p>;
  }

  return (
    <div>
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movie.map((item) => (
          <Moviecard key={item._id} movie={item} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Mywatchlist;
