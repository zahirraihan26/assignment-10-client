import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)

    console.log(user)
        //    creat user 
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // google signin 

    const signInWithGoogle = () => {

        return signInWithPopup(auth, googleProvider)
    }


    //    login user 
    const signin = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

            //   logout btn 
     const logout = () => {

        return signOut(auth);
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
        })
        return ()=>{
          unsubscribe()
        }
    }, [])


    const authData = {
        user,
        setuser,
         logout,
        createUser,
        signin,
         signInWithGoogle
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default Authprovider;