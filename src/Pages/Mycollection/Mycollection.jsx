import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Loading from '../../Component/Loading/Loading';
import Moviecard from '../../Component/Moviecard/Moviecard';

const Mycollection = () => {
    const {user}=use(AuthContext)
    const [movie,setmovie]=useState([])
    const [loading,setloading]=useState(true)

useEffect(()=>{
    fetch(`http://localhost:3000/my-collection?email=${user.email}`,{
        headers:{
            authorization: `Bearer ${user.accessToken}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        setmovie(data)
        setloading(false)
    })
},[user])


if(loading){
    return <Loading></Loading>
}

    return (
        <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
             {
                movie.map((movie) =><Moviecard key={movie._id} movie={movie}></Moviecard>)
             }

            </div>
            
        </div>
    );
};

export default Mycollection;