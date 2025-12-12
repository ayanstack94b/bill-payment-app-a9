import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Pages/Footer';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const sharedContext = createContext();

const RootsLayout = () => {

    const [currentUser, setCurrentUser] = useState(null);

    const handleSignIn = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleLoginWithGoogle = () => {

    }

    const contextData = {
        handleSignIn,
        currentUser,
        setCurrentUser,
        handleLoginWithGoogle
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