import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';



export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [ loading, setLoading ] = useState(false);

    const [ user, setUser ] = useState({});

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userNameAndPhoto = (profile) => {
        return updateProfile(auth.currentUser, profile)
    };

    const signIn = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password);
    }

    const googleprovider = new GoogleAuthProvider();


    const googlePopup = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider);
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);

        })
        return () => unsubscribe();
    }, [ user ])

    const authInfo = {
        user,
        createUser,
        setUser,
        signIn,
        logOut,
        googlePopup,
        userNameAndPhoto,
        loading
    }
    return (

        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default UserContext;

// Test commetn 