

import React, { useContext } from "react";
import { FaStar, FaRegCalendar, FaRegClock, FaGlobe } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Authprovider";

const Moviedetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const movie = data.result;

  const navigate = useNavigate();

  // Delete movie
  const handeldelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-master-pro-server-tau.vercel.app/movies/${movie._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/");
            Swal.fire({
              title: "Deleted!",
              text: "Your movie has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  // Add to watchlist
  const handelwatchlist = () => {
    fetch(`https://movie-master-pro-server-tau.vercel.app/watchlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...movie, watch_by: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Movie added successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add movie!", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="bg-[#232837] min-h-screen flex items-center justify-center px-4 sm:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16 w-full max-w-6xl mx-auto">


        {/* Poster Section */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="rounded-2xl object-cover w-[250px] sm:w-[300px] md:w-[320px] h-[380px] sm:h-[420px] md:h-[450px] shadow-lg"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 flex flex-col text-center lg:text-left">


          {/* Title, Genre & Language */}

          <div className="flex flex-col lg:flex-row md:items-start justify-between mb-6 gap-4">
            <div className="flex flex-col items-center md:items-start gap-3 flex-wrap">
              <h1 className="text-white text-3xl sm:text-4xl font-bold">
                {movie.title}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  {movie.genre}
                </span>
                <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                  {movie.language}
                </span>
              </div>
            </div>

            {/* Update/Delete Buttons visible only for owner */}
            {user?.email === movie?.addedBy && (
              <div className="flex justify-center lg:justify-end gap-3">
                <Link
                  to={`/movies/update/${movie._id}`}
                  className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-medium transition-all hover:scale-105 w-28 text-center"
                >
                  Update
                </Link>
                <button
                  onClick={handeldelete}
                  className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-medium transition-all hover:scale-105 w-28 text-center"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {/* Movie Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 mb-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400 text-xl sm:text-2xl" />
              <div className="flex flex-col">
                <span className="text-yellow-400 font-bold text-lg sm:text-2xl">
                  {movie.rating}
                </span>
                <div className="text-gray-400 text-sm ml-1">Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaRegCalendar className="text-red-400 text-xl sm:text-2xl" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg sm:text-2xl">
                  {movie.releaseYear}
                </span>
                <div className="text-gray-400 text-sm ml-1">Year</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaRegClock className="text-red-400 text-xl sm:text-2xl" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg sm:text-2xl">
                  {movie.duration}m
                </span>
                <div className="text-gray-400 text-sm ml-1">Duration</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaGlobe className="text-red-400 text-xl sm:text-2xl" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg sm:text-2xl">
                  {movie.country}
                </span>
                <div className="text-gray-400 text-sm ml-1">Country</div>
              </div>
            </div>
          </div>

          {/* Plot Summary */}
          <div className="mb-6">
            <h2 className="text-white text-2xl font-bold mb-2">Plot Summary</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {movie.plotSummary}
            </p>
          </div>

          {/* Director */}
          <div className="mb-6">
            <h2 className="text-white text-2xl font-bold mb-2">Director</h2>
            <p className="text-gray-300 text-sm sm:text-base">{movie.director}</p>
          </div>

          {/* Cast */}
          <div className="mb-10">
            <h2 className="text-white text-2xl font-bold mb-2">Cast</h2>
            <p className="text-gray-300 text-sm sm:text-base">{movie.cast}</p>
          </div>

          {/* Back & Watchlist Buttons */}
          <div className="flex gap-3 justify-center lg:justify-start">
            <Link
              to="/"
              className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-6 py-2 rounded-lg font-medium transition-all hover:scale-105 w-32 text-center"
            >
              Back
            </Link>

            <button
              onClick={handelwatchlist}
              className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-6 py-2 rounded-lg font-medium transition-all hover:scale-105 w-32 text-center"
            >
              Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Moviedetails;




