import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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


  const authInfo = {
    user,
    createUser,
    loginUser
  }


  return (
    <AuthContex.Provider value={authInfo}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;