import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContex);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // VALIDATION
    if (password.length < 6) {
      setError("Password must be 6 charcacter");

      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain One LowerCase");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain One UpperCase");
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Show success toast
        toast.success("Registration Successful");

        //  navigate
        navigate("/");
      })
      .catch((errors) => {
        console.log(errors);

        toast.error(errors.message);
      });
  };

  // Display toast if there's an error
  if (error) {
    toast.error(error);
  }

  // else{
  //   toast.success('Registration Successfull');
  // }

  return (
    <div>
      <Helmet>
        <title>TheEstateMarket || Register</title>
      </Helmet>
      <h2 className="text-3xl text-center">Please Register</h2>

      <div className="hero mt-0">
        <div className="hero-content md:w-3/4 lg:w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  name="photo"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute bottom-4 right-5 text-xl"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-2">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center">
                <small>
                  Already have an account? please{" "}
                  <Link
                    className="font-bold text-blue-600 underline"
                    to="/login"
                  >
                    Login
                  </Link>{" "}
                </small>
              </div>

              {/* {error && (
                <>
                
                {toast("Wow so easy!")}
                
                </>
              )} */}
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
