// import React, { use,  } from 'react';
// import { Link } from 'react-router';
// import img from "../../assets/react.svg";
// import { AuthContext } from '../../Provider/Authprovider';

// const Navbar = () => {
//     const {user,logout}=use(AuthContext)
//     // const [isOpen, setIsOpen] = useState(false);
//     const handellogout = () => {
//     logout()
//       .then(() => {
//         alert("Logout successfully ✅");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//     return (
          
//         <div>
         

//             <div className="navbar bg-base-100 shadow-sm">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                         </div>
//                         <ul
//                             tabIndex="-1"
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                             <li><a>Item 1</a></li>
//                             <li>
                              
//                                 <a>Parent</a>
//                                 <ul className="p-2">
                                    
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </li>
//                             <li><a>Item 3</a></li>
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl">daisyUI</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li><a>Item 1</a></li>
//                         <li>
//                             <details>
//                                 <summary>Parent</summary>
//                                 <ul className="p-2">
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </details>
//                         </li>
//                         <li><a>Item 3</a></li>
//                     </ul>
//                 </div>
//                 <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mt-4 md:mt-0">
//             {user ? (
//               <> 
//                 <div className="flex items-center space-x-3">
//                   {/* <Link onClick={() => setIsOpen(false)}> */}
//                     <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400">
//                       <img
//                         src={img}
//                         alt="User"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   {/* </Link> */}
//                   <button
//                     onClick={() => {
//                       handellogout();
                      
//                     }}
//                     className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-semibold mt-3 md:mt-0"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <> 
//                 <Link
//                   to="/auth/login"
//                   className="text-white font-medium hover:text-green-400 mt-3 md:mt-0"
//                 //   onClick={() => setIsOpen(false)}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/auth/register"
//                   className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-semibold mt-3 md:mt-0"
//                 //   onClick={() => setIsOpen(false)}
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//             </div>
//            <div className='text-red-600'>{user&& user.email}</div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router"; // ✅ fixed (was "react-router")
import { AuthContext } from "../../Provider/Authprovider";
import { Film, Menu, X } from "lucide-react";
import img from "../../assets/react.svg"; // ✅ add profile placeholder image

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => alert("Logout successfully ✅"))
      .catch((err) => console.error(err));
  };

  return (
    <nav className="bg-[#1B222C] text-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center py-3 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Film className="w-6 h-6 text-[#FF3B3B]" />
          <h1 className="text-xl font-semibold">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] bg-clip-text text-transparent">Movie Master Pro</span>
           
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            All Movies
          </NavLink>

          {user ? (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary ">
                <img
                  src={user?.photoURL || img}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F]  hover:bg-green-600 text-white px-4 py-1.5 rounded-lg font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-medium"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-medium"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1B222C] flex flex-col items-center gap-4 py-4 border-t border-gray-700">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            All Movies
          </NavLink>

          {user ? (
            <>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400">
                <img
                  src={user?.photoURL || img}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                onClick={() => setMenuOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg font-medium"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

