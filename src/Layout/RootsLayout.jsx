import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Pages/Footer';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.init';

export const sharedContext = createContext();

const RootsLayout = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    // creating an user
    const handleSignUp = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user logging in
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user logging with google
    const LoginWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    // logging out an existing user
    const handleSignOut = () => {
        return signOut(auth);
    };

    // Setting up the Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoading(false)
        });
        return () => unSubscribe();
    }, [])

    const contextData = {
        handleSignIn,
        currentUser,
        setCurrentUser,
        LoginWithGoogle,
        handleSignUp,
        handleSignOut,
        loading
    }

    return (
        <sharedContext.Provider value={contextData}>
            {
                loading ? (
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-purple-600"></div>
                ) : (
                    <div>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </div>
                )
            }
        </sharedContext.Provider>
    );
};

export default RootsLayout;