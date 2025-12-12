import React, { useContext, useState } from 'react';
import bannerImg from '../assets/LoginPageBanner.jpg'
import { NavLink, useNavigate } from 'react-router';
import auth from '../Firebase/firebase.init';
import { sharedContext } from '../Layout/RootsLayout';
const Login = () => {
    const { handleSignIn, currentUser, setCurrentUser } = useContext(sharedContext);

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);

        handleSignIn(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                console.log(user);
                navigate('/bills')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
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
                            <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                            <input type="text" name="email" id="username" placeholder="Email please!!!" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                        </div>
                        {/* Password */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button type='submit' className="block w-full p-3 text-center font-bold text-[20px] rounded-sm dark:text-gray-50 dark:bg-[#E93F56]">Login</button>

                    </form>


                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <NavLink to='/register' rel="noopener noreferrer" href="#" className="underline dark:text-[#E93F56] font-bold ml-2">Retgister</NavLink>
                    </p>
                </div>

            </section>
        </div>
    );
};

export default Login;