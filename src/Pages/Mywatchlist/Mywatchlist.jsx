// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/Authprovider';
// import Moviecard from '../../Component/Moviecard/Moviecard';
// import Navbar from '../../Component/Navbar/Navbar';
// import Footer from '../../Component/Footer/Footer';

// const Mywatchlist = () => {
//   const { user } = useContext(AuthContext);
//   const [movie, setmovie] = useState([]);
//   const [loading, setloading] = useState(true);

//   useEffect(() => {
//     if (!user?.email) return;

//     setloading(true);
//     fetch(`https://movie-master-pro-server-tau.vercel.app/mywatchlist?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         setmovie(data);
//         setloading(false);
//       })
//       .catch(err => {
//         console.error("Failed to fetch watchlist:", err);
//         setloading(false);
//       });
//   }, [user?.email]);

//   if (!user) {
//     return <p className="text-center text-4xl text-gray-400 mt-10">Please login to see your watchlist.</p>;
//   }

//   if (loading) {
//     return <p className="text-center text-4xl text-gray-400 mt-10">Loading your watchlist...</p>;
//   }

//   if (movie.length === 0) {
//     return <p className="text-center text-4xl text-gray-400 mt-10">No movies in your watchlist yet.</p>;
//   }

//   return (
//     <div className=' flex flex-col items-center'>
//       <div className='pb-10'>
//         <Navbar></Navbar>
//       </div>
//       <div className="p-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {movie.map((item) => (
//             <Moviecard key={item._id} movie={item} />
//           ))}
//         </div>
//       </div>
//       <div>
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// };

// export default Mywatchlist;



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Moviecard from '../../Component/Moviecard/Moviecard';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

const Mywatchlist = () => {
  const { user } = useContext(AuthContext);
  const [movie, setmovie] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setloading(true);
    fetch(`https://movie-master-pro-server-tau.vercel.app/mywatchlist?email=${user.email}`)
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
    return (
      <div className='flex   flex-col items-center'>
        <div>
        <Navbar />
        </div>
         <div className='min-h-screen mt-10 md:mt-30 '>
          <p className="text-center text-4xl text-gray-400 mt-10">Please login to see your watchlist.</p>
         </div>
         <div>
          <Footer />
         </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <div className="p-6">
        {loading ? (
          <p className="text-center text-4xl text-gray-400 mt-10">Loading your watchlist...</p>
        ) : movie.length === 0 ? (
          <p className="text-center text-4xl text-gray-400 mt-10">No movies in your watchlist yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movie.map((item) => (
              <Moviecard key={item._id} movie={item} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Mywatchlist;

