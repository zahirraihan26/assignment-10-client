
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Film } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const Updatemovie = () => {
    const data = useLoaderData()
     const movie= data.result
     const handelsubmmit =(e)=>{
        e.preventDefault()

        const formData={
            title:e.target.title.value,
            genre:e.target.genre.value,
            releaseYear:e.target.releaseYear.value,
            director:e.target.director.value,
            rating:e.target.rating.value,
            duration:e.target.duration.value,
            language:e.target.language.value,
            country:e.target.country.value,
            cast:e.target.cast.value,
            posterUrl:e.target.posterUrl.value,
            plotSummary:e.target.plotSummary.value,
            

        }
        

        fetch(`http://localhost:3000/movies/${movie._id}`,{
          method:"PUT",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            toast.success("Movie succesfully updated ")
        })
        .catch(err=>{
            console.log(err)
            toast.error("data update fall")
        })

    }


     
   return (
        <div>
            <header className='mb-8'>
                <Navbar></Navbar>
            </header>
            <div className="bg-[#232837] min-h-screen flex items-center rounded-2xl justify-center p-4">
                
                <form onSubmit={handelsubmmit}  className="bg-[#232837] px-8 py-10 rounded-2xl max-w-3xl mx-auto w-full shadow-xl border border-gray-700" >
                    <div className="flex items-center gap-3 mb-8">
                        <Film className="w-10 h-10 text-[#FF3B3B]" />
                        <h2 className="text-white text-3xl font-bold">Update Movie</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Title *</label>
                            <textarea
                                name="title"
                                defaultValue={movie.title}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="Enter movie Title "
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Genre *</label>
                            <select
                                defaultValue={movie.genre}
                                name="genre"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                            >
                                <option value="" disabled>
                                    Select Genre
                                </option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </div>


                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Release Year *</label>
                            <textarea
                                name="releaseYear"
                                defaultValue={movie.releaseYear}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="Enter movie  releaseYear "
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Director *</label>
                            <textarea
                                name="director"
                                defaultValue={movie.director}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="Enter director name "
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Rating (0-10) *</label>
                            <textarea
                                name="rating"
                                defaultValue={movie.rating}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="rating "
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Duration (minutes) *</label>
                            <textarea
                                name="duration"
                                defaultValue={movie.duration}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="duration "
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Language *</label>
                            <textarea
                                name="language"
                                defaultValue={movie.language}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="language "
                            ></textarea>
                        </div>


                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Country *</label>
                            <textarea
                                name="country"
                                defaultValue={movie.country}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="country "
                            ></textarea>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Cast *</label>
                            <textarea
                                name="cast"
                                defaultValue={movie.cast}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="cast "
                            ></textarea>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Poster URL *</label>
                            <textarea
                                name="posterUrl"
                                defaultValue={movie.posterUrl}
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="https://example.com/poster.jpg"
                            ></textarea>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Plot Summary *</label>
                            <textarea
                                name="plotSummary"
                                defaultValue={movie.plotSummary}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"

                            ></textarea>
                        </div>



                    </div>


                    <div className="flex gap-4 mt-6">
                        <button
                            type="submit"
                            className="flex-1 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] hover:bg-red-600 transition"
                        >
                            Update movie
                        </button>

                        <Link to={`/movies/${movie._id}`} type="button" className="px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F]">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Updatemovie;