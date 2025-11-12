import React, { use } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router';

const Myprofile = () => {
    const {user}=use(AuthContext)
    return (
          <div className='flex flex-col items-center'>
      {/* Header */}
      <header>
        <Navbar/>
      </header> 
      {/* Main */}
      <main className="min-h-screen w-6xl flex flex-col items-center justify-center p-6 bg-base-200">
       

        {user ? (
          <div className="card w-full max-w-sm bg-base-100 shadow-2xl p-6 rounded-2xl text-center">
             <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>
            {/* Profile Photo */}
            <div className="avatar flex justify-center mb-4">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={user.photoURL}
                  alt="User"
                />
              </div>
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-semibold mb-2">
              {user.displayName || "No Name Found"}
            </h2>
            <p className="text-gray-500 mb-6">
              {user.email || "No Email Found"}
            </p>

            {/* Update Button */}
            <Link
          
              className="btn btn-primary w-full text-white"
            >
              Update Profile
            </Link>
          </div>
        ) : (
          <p className="text-center text-lg text-red-700 mt-10">
            No user is logged in. 
          </p>
        )}
      </main>

      {/* Footer */}
      <footer>
        <Footer/>
      </footer>
    </div>
    );
};

export default Myprofile;