import React from 'react';
import { useLoaderData } from 'react-router';
import Moviecard from '../../Component/Moviecard/Moviecard';


const Recentlyaddedmovie = () => {
    const data =useLoaderData()
    // console.log(data)
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
             {
                data.map((movie) =><Moviecard key={movie._id} movie={movie}></Moviecard>)
             }

            </div>
            
        </div>
    );
};

export default Recentlyaddedmovie;


