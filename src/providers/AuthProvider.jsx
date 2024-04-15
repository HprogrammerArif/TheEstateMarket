import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.Config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContex = createContext(null);

const auth = getAuth(app);

//Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);


  //CREATE USER
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  //LOGIN USER
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }


  // Google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }

  // Github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  }


  useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, currentUser => {
         console.log('User in the auth state change', currentUser);
         setUser(currentUser);
    });
    return () => {
      unSubscribe();
    }
  },[])


  const authInfo = {
    user,
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logOut
  }


  return (
    <AuthContex.Provider value={authInfo}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;