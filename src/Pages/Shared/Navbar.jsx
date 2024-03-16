import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
 import useAuth from "../../Hooks/UseAuth";
const NavBar = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const {user, logOut} = useAuth()

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/ "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-bold text-orange-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
     

      <li>
        <NavLink
          to="/trainer"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
          }
        >
          Trainer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
          }
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold text-orange-400" : ""
          }
        >
           Gallery
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  const [navbar, setNavbar] = useState(false);
  return (
    <div className=" border-b-2 text-white relative">
      {/* For Mobile View  */}
      <motion.div
        animate={navbar ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween" }}
        className={`fixed h-screen  bg-green-700 font-semibold top-0 px-8 py-8 md:hidden flex flex-col gap-4 z-50 
        ${navbar ? "left0" : "-translate-x-full"}
        `}
      >
        {navLinks}
      </motion.div>
      <nav className="w-[85%] md:w-[95%] lg:w-[100%] mx-auto flex items-center justify-between py-2 text-black font-semibold bg-gray-700">
        <img
          className="w-20 md:w-28 lg:w-24 px-4 py-1 rounded-full"
          src='https://template-kit.evonicmedia.com/layout63/wp-content/uploads/2024/02/Group-1000002965-1.png'
          alt=""
        />
        <div className="hidden md:flex items-center justify-center list-none gap-4">
          {navLinks}
        </div>
        

<div>
          {user ? (
            <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            
              <div className="block md:hidden">
                <div
                  onClick={() => {
                    setNavbar(!navbar);
                  }}
                  className=""
                >
                  {navbar ? (
                    <LiaTimesSolid className="text-2xl duration-300 active:scale-75 cursor-pointer select-none"></LiaTimesSolid>
                  ) : (
                    <HiOutlineBars3BottomRight className="text-2xl duration-300 active:scale-75 cursor-pointer select-none"></HiOutlineBars3BottomRight>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="login">
                <p className="btn btn-sm px-3 py-1 rounded-full duration-300 select-none active:scale-90">
                  Login
                </p>
              </Link>
              <div className="block md:hidden">
                <div
                  onClick={() => {
                    setNavbar(!navbar);
                  }}
                  className=""
                >
                  {navbar ? (
                    <LiaTimesSolid className="text-2xl duration-300 active:scale-75 cursor-pointer select-none"></LiaTimesSolid>
                  ) : (
                    <HiOutlineBars3BottomRight className="text-2xl duration-300 active:scale-75 cursor-pointer select-none"></HiOutlineBars3BottomRight>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;