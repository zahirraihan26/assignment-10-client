import React from 'react';
import Moviecard from '../../Component/Moviecard/Moviecard';
import { useLoaderData } from 'react-router';

const Allmovies = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div>
           <h1 className='font-bold text-4xl p-3'>All Movies</h1>
           <p className='font-semibold text-2xl p-3'>Browse our complete collection</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
            {data.map(movie=><Moviecard key={movie._id} movie={movie}></Moviecard>)}
          </div>

        </div>
    );
};

export default Allmovies;