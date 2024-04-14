import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.Config";

export const AuthContex = createContext(null);

const auth = getAuth(app);


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
    logOut
  }


  return (
    <AuthContex.Provider value={authInfo}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;