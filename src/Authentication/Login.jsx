import React, { useContext, useState } from 'react';
import bannerImg from '../assets/LoginPageBanner.jpg'
import { NavLink, useNavigate } from 'react-router';
import auth from '../Firebase/firebase.init';
import { sharedContext } from '../Layout/RootsLayout';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { handleSignIn, currentUser, setCurrentUser, LoginWithGoogle } = useContext(sharedContext);
    const provider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || "/bills";
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;
        // console.log(password, email);

        if (!email) {
            alert("Email is required");
            return;
        }

        if (!password) {
            alert("Password is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        handleSignIn(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                // console.log(user);
                // navigate('/bills')
                navigate(from, { replace: true });

            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    alert("No account found with this email");
                } else if (error.code === "auth/wrong-password") {
                    alert("Incorrect password");
                } else {
                    alert(error.message);
                }
            });
    }
    // Login with google

    const handleLoginWithGoogle = () => {
        LoginWithGoogle(auth, provider)
            .then((result) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:gap-50 my-10 lg:mx-20 xl:mx-40">

            {/* image artwork section */}
            <section className='hidden lg:block grid-cols-10 md:hidden'>
                <img src={bannerImg} alt="" />
            </section>
            {/* Login section */}
            <section className="lg:justify-end md:w-full lg:grid-cols-2 lg:mt-15">
                <div className="md:mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-[#DFD9D4] dark:text-gray-800">
                    <h1 className="text-4xl font-extrabold text-center dark:text-[#E93F56]">Login</h1>
                    <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            {/* email */}
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email please!!!" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                        </div>
                        {/* Password */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                            {/* <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div> */}
                        </div>
                        <button type='submit' className="block w-full p-3 text-center font-bold text-[20px] rounded-sm dark:text-gray-50 dark:bg-[#E93F56]">Login</button>

                    </form>
                    <p className="block text-center text-gray-500"><span className='font-bold text-xl text-black font-sherif'>Or</span></p>

                    {/* Google login */}

                    <div onClick={handleLoginWithGoogle} className="flex justify-center space-x-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4  rounded-md focus:ring-2 focus:ring-offset-2 dark:border-gray-600 focus:dark:ring-[#E93F56] bg-[#F9FAFB]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <FcGoogle size={35}></FcGoogle>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>

                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <NavLink to='/register' rel="noopener noreferrer" href="#" className="underline dark:text-[#E93F56] font-bold ml-2">Register</NavLink>
                    </p>
                </div>

            </section>
        </div>
    );
};

export default Login;