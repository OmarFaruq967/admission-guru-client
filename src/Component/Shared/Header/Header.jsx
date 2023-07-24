import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Header/Header.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import logo from "../../../../public/images/Logo/logo.png";
import Container from "../Container/Container";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const logOut = authContext?.logOut;
  const updateUserProfileImage = authContext?.updateUserProfileImage;
  const photoURL = user?.photoURL;


  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const UserProfileImage = async (photoURL) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { photoURL });
      setUser((prevUser) => ({ ...prevUser, photoURL }));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };


  const navMenu = (
    <>
      <li className="font-semibold">
        <NavLink
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/colleges"
          aria-label="Colleges"
          title="Colleges"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Colleges
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/admission"
          aria-label="Admission"
          title="Admission"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Admission
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/my-college"
          aria-label="My College"
          title="My College"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          My College
        </NavLink>
      </li>
    
    </>
  );

  return (
    <div className="relative">
       <div className="py-5 mx-auto sm:max-w-full md:max-w-full lg:max-w-full bg-[#989898] bg-opacity-[60%] fixed top-0 left-0 right-0 z-20">
        <Container>
        <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="LearnHub"
          title="LearnHub"
          className="inline-flex items-center"
        >
          <div className="flex items-center justify-center "></div>
          <span className="w-[90px] md:w-[150px]">
            <img src={logo} alt="" />
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">{navMenu}</ul>

        <div className="flex mx-0 items-center gap-5">
          {user?.email? (
            <>
              <button
                className="text-white bg-[#041838] hover:bg-[#fbbd23] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 btn btn-sm"
                onClick={handleLogOut}
              >
                <Link to={""}>Logout</Link>
              </button>
            </>
          ) : (
            <button className="text-white bg-[#041838] hover:bg-[#fbbd23] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 btn btn-sm">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
          {photoURL ? (
            <img
              src={photoURL}
              alt="User Profile"
              className="rounded-full h-9 w-9 "
            />
          ) : (
            "" // <FaUserCircle className="text-3xl" />
          )}
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="LearnHub"
                      title="LearnHub"
                      className="inline-flex items-center"
                    >
                      <span className="w-[70px]">
                        <img src={logo} alt="" />
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">{navMenu}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
        </Container>
      
    </div>
    </div>
   
  );
};

export default Header;
