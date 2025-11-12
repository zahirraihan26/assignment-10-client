import { useEffect, useState } from "react";
import { FaFilm, FaStar, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  const [movieCount, setMovieCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [highestRated, setHighestRated] = useState(null);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });

    // fetch all data
    fetch("https://movie-master-pro-server-tau.vercel.app/movieCount")
      .then((res) => res.json())
      .then((data) => setMovieCount(data.totalMovies))
      .catch((err) => console.error(err));

    fetch("https://movie-master-pro-server-tau.vercel.app/userCount")
      .then((res) => res.json())
      .then((data) => setUserCount(data.totalUsers))
      .catch((err) => console.error(err));

    fetch("https://movie-master-pro-server-tau.vercel.app/highestRated")
      .then((res) => res.json())
      .then((data) => setHighestRated(data.highestRated))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#232837] rounded-2xl py-12 flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl px-6">

        {/* Total Movies */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex-1 bg-[#232837] rounded-2xl border border-gray-600 flex flex-col items-center py-10 shadow-lg"
        >
          <FaFilm className="text-5xl text-red-400 mb-4" />
          <div className="text-4xl font-bold text-yellow-400 mb-1">
            {movieCount}
          </div>
          <div className="text-gray-300 text-lg">Total Movies</div>
        </div>

        {/* Highest Rated */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex-1 bg-[#232837] rounded-2xl border border-gray-600 flex flex-col items-center py-10 shadow-lg text-center px-3"
        >
          <FaStar className="text-5xl text-red-400 mb-4" />
          <div className="text-4xl font-bold text-yellow-400 mb-1">
            {highestRated ? highestRated.rating : "..."}
          </div>
          <div className="text-gray-300 text-lg">Highest Rated</div>
        </div>

        {/* Total Users */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex-1 bg-[#232837] rounded-2xl border border-gray-600 flex flex-col items-center py-10 shadow-lg"
        >
          <FaChartLine className="text-5xl text-red-400 mb-4" />
          <div className="text-4xl font-bold text-yellow-400 mb-1">
            {userCount}
          </div>
          <div className="text-gray-300 text-lg">Total Users</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
