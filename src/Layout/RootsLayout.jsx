import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Pages/Footer';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import Loading from '../Pages/Loading';

export const sharedContext = createContext();

const RootsLayout = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [balance, setBalance] = useState(10000);
    const [paidBills, setPaidBills] = useState([]);
    const { state } = useNavigation()

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
    }, []);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("paidBills"));
        if (stored) {
            setPaidBills(stored);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("paidBills", JSON.stringify(paidBills));
    }, [paidBills]);


    const contextData = {
        handleSignIn,
        currentUser,
        setCurrentUser,
        LoginWithGoogle,
        handleSignUp,
        handleSignOut,
        setBalance,
        balance,
        loading,
        setPaidBills,
        paidBills,
    }

    return (
        <sharedContext.Provider value={contextData}>
            {
                loading ? (
                    <div className="w-16 h-16 border-4 border-dashed mx-auto mt-50 rounded-full animate-spin dark:border-purple-600"></div>
                ) : (
                    <div>
                        <Navbar />
                            {import.meta.env.VITE_name}
                        {state == "loading" ? < Loading /> : <Outlet />}
                        <Footer />
                    </div>
                )
            }
        </sharedContext.Provider >
    );
};

export default RootsLayout;