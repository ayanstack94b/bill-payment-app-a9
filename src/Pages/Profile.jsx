import React, { useContext } from 'react';
import { sharedContext } from '../Layout/RootsLayout';
import { useNavigate } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
    const { currentUser, loading } = useContext(sharedContext)
    console.log(currentUser);
    const navigate = useNavigate();

    if (loading) {
        return null;
    }

    const defaultAvatar = (
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500">
            <FaUserCircle size={60} className="text-emerald-600" />
        </div>
    );


    return (

        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 mx-auto my-30">
            {/* Avatar */}
            <div className="flex justify-center sm:justify-start mb-6 sm:mb-0">
                {
                    currentUser.photoURL ? (
                        <img src={currentUser.photoURL} className="w-24 h-24 rounded-full object-cover"></img>
                    ) : (
                        defaultAvatar
                    )
                }
            </div>
            {/* info  */}
            <div className="flex flex-col space-y-4 text-center sm:text-left">
                <div className="">
                    <h2 className="text-2xl font-semibold">
                        {currentUser.displayName || "No name set"}
                    </h2>
                    <p className="text-sm dark:text-gray-600">
                        {currentUser.email}
                    </p>
                </div>

                <button
                    onClick={() => navigate("/profile/edit")}
                    className="self-center sm:self-start px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
                >
                    Update Profile
                </button>

            </div>

        </div>

    );
};

export default Profile;