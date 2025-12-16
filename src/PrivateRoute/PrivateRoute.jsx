import React, { useContext } from 'react';
import { sharedContext } from '../Layout/RootsLayout';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(sharedContext);
    const location = useLocation();
    

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!currentUser) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export default PrivateRoute;