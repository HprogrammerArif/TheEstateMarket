import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);

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
    <header className="p-4  text-black-100 sticky z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <div className="flex justify-center items-center">
            <img
              className="w-16"
              src="https://i.ibb.co/94tY23G/Screenshot-2024-04-13-203604.png"
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
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Update Profile
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              User Profile
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Link
            </NavLink>
          </li>
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          {user ? (
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
