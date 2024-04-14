import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2 className="text-3xl text-center">Please Register</h2>

      <div className="hero mt-0">
        <div className="hero-content md:w-3/4 lg:w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
