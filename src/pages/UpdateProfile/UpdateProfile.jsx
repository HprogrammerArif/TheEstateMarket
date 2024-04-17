const UpdateProfile = () => {
  return (
    <section className="p-6 mt-10 bg-gray-400 text-gray-900 ">
      <form
        noValidate=""
        action=""
        className="container flex flex-col justify-center items-center mx-auto space-y-12"
      >
        
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">Adipisci fuga autem eum!</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Profile Picture
              </label>
              <input
                id="profile"
                type="url"
                placeholder="Url"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                User Id
              </label>
              <input
                id="userId"
                type="text"
                placeholder="id"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Photo
              </label>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/30x30/?random"
                  alt=""
                  className="w-10 h-10 bg-gray-300 rounded-full dark:bg-gray-300"
                />
                <button
                  type="button"
                  className="px-4 py-2 border rounded-md border-gray-800"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdateProfile;
