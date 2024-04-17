import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../../providers/AuthProvider";

const Navbar = () => {
 // const [stateData, setStateData] = useState(null);
  const { user, logOut } = useContext(AuthContex);
  //console.log(user);

  // if (!user) {
  //   return <h1>Loading...</h1>; // Or any other loading indicator
  // }

  // useEffect(() => {
  //   setStateData(user);
  // }, [user]);

  // // Render error message if stateData is null
  // if (!stateData) {
  //   return <h1>Loading...</h1>;
  // }

  // if (user) {
  //   const { displayName = "", photoURL = "" } = user;
  // }
  //console.log(displayName, photoURL);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errors = error.message;
        console.log(errors);
      });
  };
  
  return (
    <header className="p-4 bg-gray-100 text-black-100 sticky z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <div className="flex justify-center items-center">
            <img
              className="w-12 mr-2"
              src="https://i.ibb.co/QCqgHMY/logo.png"
              alt=""
            />
            <span className="font-black text-xl text-violet-600 mt-1">
              TheEstate <br />
              Market
            </span>
          </div>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border- text-violet-400 border-violet-400"
            >
              Home
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="error"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Blogs
            </NavLink>
          </li>
          
          <li className="flex">
            <NavLink
              to="error"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              About
            </NavLink>
          </li>
          

          {user && (
            <li className="flex">
            <NavLink
            
              to="userProfile"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Update Profile
            </NavLink>
          </li>
          )}
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          {/* {user ? (
            <button
              onClick={handleLogOut}
              className="self-center px-6 py-2 font-semibold rounded bg-violet-400 text-gray-900"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">
                Login
              </button>
            </Link>
          )} */}

          {user ? (
            <>
              <button
                className="btn bg-purple-500 text-gray-100 font-bold mr-6"
                onClick={handleLogOut}
              >
                <a>Logout</a>
              </button>

              <button
                className="dropdown rounded-2xl dropdown-end tooltip-left tooltip "
                data-tip='user name'
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost  btn-circle avatar"
                >
                  <div className="w-15 border-4 border-green-600 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                     // src={photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/userProfile" className="justify-between">
                      View Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </button>
            </>
          ) : (
            <>
              <Link className="mr-5" to="/register">
                <button className="self-center px-4 py-3 font-semibold rounded bg-green-400 text-gray-900">
                  Register
                </button>
              </Link>

              <Link to="/login">
                <button className="self-center px-6 py-3 font-semibold rounded bg-violet-400 text-gray-900">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>

        <button className="p-4  lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
