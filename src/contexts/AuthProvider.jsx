import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider  = new GoogleAuthProvider();

const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    } 
    const Login = (email, password) => {
        setLoading
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        Login,
        logOut,
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider