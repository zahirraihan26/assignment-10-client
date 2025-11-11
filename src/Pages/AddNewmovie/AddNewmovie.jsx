import { Film } from 'lucide-react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { use } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { toast } from 'react-toastify';


const AddNewmovie = () => {
    const {user}=use(AuthContext)
    

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
             created_at: new Date(),
            addedBy:user.email,

        }
        

        fetch('http://localhost:3000/movies',{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data=>{
             toast.success("Successfully added!")
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div className=' flex flex-col items-center '>
            <header className='mb-6'>
                <Navbar></Navbar>
            </header>
            <div className="bg-[#232837] min-h-screen min-w-screen rounded-2xl flex items-center justify-center p-10">
                <form onSubmit={handelsubmmit} className="bg-[#232837] px-8 py-10 rounded-2xl max-w-3xl mx-auto w-full shadow-xl border border-gray-700" >
                    <div className="flex items-center gap-3 mb-8">
                        <Film className="w-10 h-10 text-[#FF3B3B]" />
                        <h2 className="text-white text-3xl font-bold">Add New Movie</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Title *</label>
                            <textarea
                                name="title"
                                rows="1"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#242837] text-white focus:outline-none border border-gray-700"
                                placeholder="Enter movie Title "
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Genre *</label>
                            <select
                                defaultValue={""}
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
                                <option value="Thriller">Thriller</option>
                                <option value="Biography">Biography</option>
                            </select>
                        </div>


                        <div>
                            <label className="block text-start text-gray-200 mb-2 font-semibold">Release Year *</label>
                            <textarea
                                name="releaseYear"
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
                            Add Movie
                        </button>

                        <button type="button" className="px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F]">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddNewmovie;




