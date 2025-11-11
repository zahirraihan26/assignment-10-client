import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/Authprovider";
import { Film, Menu, X } from "lucide-react";
import img from "../../assets/react.svg";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logout()
      .then(() => toast("Logout successfully ✅"))
      .catch((err) => console.error(err));
  };

  return (
    <nav className="bg-[#1B222C] text-white shadow-md fixed w-full left-0 top-0 z-50">
      <div className=" mx-auto flex justify-between items-center py-3 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Film className="w-6 h-6 text-[#FF3B3B]" />
          <h1 className="text-xl font-semibold">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] bg-clip-text text-transparent">
              Movie Master Pro
            </span>
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

          <NavLink
            to="/my-collection"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            My Collection
          </NavLink>

          <NavLink
            to="/mywatchlist"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            My Watchlist
          </NavLink>

          <NavLink
            to="/movies/add"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            Add Movie
          </NavLink>

          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />

          {user ? (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src={user?.photoURL || img}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#FF3B3B] to-[#FFC14F] text-white px-4 py-1.5 rounded-lg font-medium"
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
