import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
const auth = getAuth();

const UpdateProfile = () => {
  const [profileUpdated, setProfileUpdated] = useState(false);

  const handleUpdate = (e) => {
    //console.log(e);
    //e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const email = form.get("email");
    const profile = form.get("profile");
    const userId = form.get("userId");
    console.log(username, email, profile, userId);
    //console.log("arif");

    updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: profile,
    })
      .then(() => {
        setProfileUpdated(true); // Set profileUpdated state to true
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  // if (profileUpdated) {
  //   // Reset profileUpdated state to false after rendering the UI
  //   setTimeout(() => setProfileUpdated(false), 1000);
  // }

  return (
    <section className="p-6 mt-10 bg-gray-400 text-gray-900 ">
      <form
        onSubmit={handleUpdate}
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
                name="username" // Add name attribute
                type="text"
                placeholder="Username"
                required
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Your Email
              </label>
              <input
                id="email"
                name="email" // Add name attribute
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Profile Picture
              </label>
              <input
                id="profile"
                name="profile" // Add name attribute
                type="url"
                placeholder="Url"
                required
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                User Id
              </label>
              <input
                id="userId"
                name="userId" // Add name attribute
                type="text"
                placeholder="id"
                required
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
                  type="submit" // Change type to submit
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

// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//         setName(user.displayName || '');
//         setPhotoURL(user.photoURL || '');
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePhotoURLChange = (e) => {
//     setPhotoURL(e.target.value);
//   };

//   const handleSaveChanges = async () => {
//     try {
//       await user.updateProfile({
//         displayName: name,
//         photoURL: photoURL,
//       });
//       alert('Profile updated successfully!');
//     } catch (error) {
//       console.error('Error updating profile:', error.message);
//     }
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h2>Welcome, {user.displayName || 'User'}!</h2>
//           <form>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={name}
//                 onChange={handleNameChange}
//               />
//             </label>
//             <br />
//             <label>
//               Photo URL:
//               <input
//                 type="text"
//                 value={photoURL}
//                 onChange={handlePhotoURLChange}
//               />
//             </label>
//             <br />
//             <button type="button" onClick={handleSaveChanges}>
//               Save Changes
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div>
//           <h2>Please log in to view your profile.</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
