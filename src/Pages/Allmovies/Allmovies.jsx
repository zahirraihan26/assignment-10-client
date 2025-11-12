import React, { useState } from 'react';
import Moviecard from '../../Component/Moviecard/Moviecard';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:3000';

const Allmovies = () => {
  const initialData = useLoaderData();
  const [movies, setMovies] = useState(initialData);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [minRating, setMinRating] = useState('');
  const [maxRating, setMaxRating] = useState('');

  const availableGenres = [
    'All',
    'Action',
    'Sci-Fi',
    'Comedy',
    'Drama',
    'Horror',
    'Thriller',
  ];


  const fetchFilteredMovies = (genre) => {
    if (genre === 'All') {
      fetch(`${API_BASE_URL}/movies`)
        .then((res) => res.json())
        .then((allMovies) => setMovies(allMovies))
        .catch((error) => console.error('Error fetching all movies:', error));
    } else {
      fetch(`${API_BASE_URL}/movies/filter?genres=${genre}`)
        .then((res) => res.json())
        .then((filteredMovies) => setMovies(filteredMovies))
        .catch((error) => {
          console.error('Error fetching filtered movies:', error);
          setMovies([]);
        });
    }
  };

  const handleGenreChange = (e) => {
    const newGenre = e.target.value;
    setSelectedGenre(newGenre);
    fetchFilteredMovies(newGenre);
  };

  const handleRatingFilter = () => {
    if (minRating === '' || maxRating === '') {
        toast('Please enter both min and max rating!');
      return;
    }

    fetch(`${API_BASE_URL}/movies/filterByRating?min=${minRating}&max=${maxRating}`)
      .then((res) => res.json())
      .then((filteredMovies) => setMovies(filteredMovies))
      .catch((error) => {
        console.error('Error fetching filtered movies by rating:', error);
        setMovies([]);
      });
  };

  return (
    <div>
        <div className='flex flex-col md:flex-row items-center md:items-start md:justify-between  px-5 py-4 mb-6'>
      <div className='flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0'>
        <h1 className='font-bold text-3xl sm:text-4xl'>All Movies</h1>
        <p className='font-semibold text-lg sm:text-2xl'>Browse our complete collection</p>
      </div>

      {/* 🎭 Genre Dropdown */}
      <select
        className='p-2 rounded-md border border-gray-400 mb-4'
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        {availableGenres.map((genre) => (
          <option className='bg-gray-500' key={genre} value={genre}>
            {genre === 'All' ? 'All Genres' : genre}
          </option>
        ))}
      </select>
      </div>
      {/* ⭐ Rating Filter Section */}
      <div className='flex justify-center gap-2 mb-6'>
        <input
          type='number'
          placeholder='Min Rating'
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className='border border-gray-400 rounded-md p-2 w-32'
        />
        <input
          type='number'
          placeholder='Max Rating'
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
          className='border border-gray-400 rounded-md p-2 w-32'
        />
        <button
          onClick={handleRatingFilter}
          className='px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F]'
        >
          Submit
        </button>
      </div>

      {/* 🎬 Movie Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6'>
        {movies.length > 0 ? (
          movies.map((movie) => <Moviecard key={movie._id} movie={movie} />)
        ) : (
          <p className='col-span-full text-center text-xl text-gray-500'>
            No movies found for the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Allmovies;
