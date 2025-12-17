import { useContext, useEffect, useState } from 'react';
import themeLogo from '../../../public/themeLogo.png'
import { NavLink, useNavigate } from 'react-router';
import { sharedContext } from '../../Layout/RootsLayout';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser, loading, handleSignOut, balance } = useContext(sharedContext);
    const [imgError, setImgError] = useState(false);
    const defaultAvatar = (
        <div className="relative w-10 h-10 mr-5 flex items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500">
            <FaUserCircle className="text-emerald-600" size={26} />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
        </div>
    );
    if (loading) {
        return null;
    }

    useEffect(() => {
        if (!loading && currentUser === null) {
            navigate('/login');
        }
    }, [currentUser, loading, navigate]);

    // console.log(value);
    return (
        <header className="p-4 dark:bg-[#DFD9D4] text-white">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to='/' rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className='w-15 h-15' src={themeLogo} />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to='/' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 font-semibold dark:text-[#E93F56] ">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to='/bills' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 font-semibold dark:text-[#E93F56] ">Bills</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to='/profile' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 font-semibold dark:text-[#E93F56] ">Profile</NavLink>
                    </li>

                </ul>
                <div className="items-center hidden lg:flex ">
                    {
                        currentUser ? (
                            <>
                                {currentUser.photoURL && imgError ? (
                                    <img className="w-10 h-10 rounded-full ml-3" src={currentUser.photoURL}
                                        onError={() => setImgError(true)} />
                                ) : (
                                    defaultAvatar
                                )}

                                <button
                                    onClick={handleSignOut}
                                    className="px-8 py-3 font-semibold rounded dark:bg-[#E93F56] dark:text-gray-50"
                                >
                                    Logout
                                </button>
                                <span className="ml-4 font-bold text-emerald-600">
                                    Balance: ₹{balance}
                                </span>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="px-8 mr-3 py-3 text-[23px] text-rose-600 font-extrabold"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => navigate('/register')}
                                    className="px-8 py-3 font-semibold rounded dark:bg-[#E93F56] dark:text-gray-50"
                                >
                                    Register
                                </button>
                            </>
                        )
                    }
                </div>

                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;