import React, { useState, useEffect } from 'react';
import { FaFilm } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const genres = [
  'Action',
  'Drama',
  'Comedy',
  'Sci-Fi',
  'Horror',
  'Romance'
];

const Genresection = () => {
  const [selected, setSelected] = useState('Action');

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,   
      offset: 100,  
    });
  }, []);

  return (
    <div className="w-full px-6 pt-8 bg-gray-800 py-10 rounded-2xl ">
      {/* Header */}
      <div
        className="flex items-center gap-3 mb-8"
        data-aos="fade-right"
      >
        <FaFilm className=" text-[#FF3B3B] text-3xl" />
        <h2 className="text-4xl font-bold">Browse by Genre</h2>
      </div>

      {/* Genre buttons */}
      <div className="flex gap-6 flex-wrap justify-center md:justify-start">
        {genres.map((genre, i) => (
          <button
            key={genre}
            data-aos="zoom-in"
            data-aos-delay={i * 500}
            className={`rounded-2xl px-11 py-6 text-xl font-medium shadow-sm border transition
              ${
                selected === genre
                  ? 'bg-white text-yellow-500 border-yellow-300 ring-2 ring-yellow-100'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-yellow-300'
              }`}
            onClick={() => setSelected(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genresection;
