import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Loading from '../../Component/Loading/Loading';
import Moviecard from '../../Component/Moviecard/Moviecard';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router';

const Mycollection = () => {
    const { user } = use(AuthContext)
    const [movie, setmovie] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch(`https://movie-master-pro-server-tau.vercel.app/my-collection?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setmovie(data)
                setloading(false)
            })
    }, [user])


    if (loading) {
        return <div> <span className="loading loading-spinner loading-xl"></span> </div>
    }

    return (
        <div className=' flex flex-col items-center'>
            <div className='pb-10'>
                <Navbar></Navbar>
            </div>

            <div>

                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between  px-5 py-4 mb-6">

                    {/* Movie Title Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
                        <h1 className="font-bold text-3xl sm:text-4xl ">All Movies</h1>
                        <p className="font-semibold text-lg sm:text-2xl ">
                            Browse our complete collection
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-3">
                        <Link
                            to={`/update/${movie._id}`}
                            className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-md w-28 text-center"
                        >
                            Update
                        </Link>
                        <button
                            className="bg-gradient-to-r from-[#FFC14F] to-[#FF3B3B] text-white px-4 py-1.5 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-md w-28 text-center"
                        >
                            Delete
                        </button>
                    </div>

                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
                    {
                        movie.map((movie) => <Moviecard key={movie._id} movie={movie}></Moviecard>)
                    }

                </div>



            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Mycollection;