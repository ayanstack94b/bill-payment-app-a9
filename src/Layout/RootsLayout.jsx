import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Pages/Footer';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const sharedContext = createContext();

const RootsLayout = () => {

    const handleSignIn = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const contextData = {
        handleSignIn,
    }


    return (
        <sharedContext.Provider value={contextData}>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </sharedContext.Provider>
    );
};

export default RootsLayout;