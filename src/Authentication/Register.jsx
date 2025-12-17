import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router';
import auth from '../Firebase/firebase.init';
import { useContext } from 'react';
import { sharedContext } from '../Layout/RootsLayout';

const Register = () => {
    const provider = new GoogleAuthProvider();
    const { LoginWithGoogle, handleSignUp } = useContext(sharedContext);
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    // const handleLoginWithGoogle = () => {
    //     LoginWithGoogle(auth, provider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             // The signed-in user info.
    //             const user = result.user;
    //             navigate(from, { replace: true });
    //             // console.log(user);

    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // console.log(errorMessage);
    //         });
    // }
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!name) {
            alert("Name is required");
            return;
        }

        if (!email) {
            alert("Email is required");
            return;
        }

        if (!password) {
            alert("Password is required");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one uppercase letter");
            return;
        }

        if (!/[a-z]/.test(password)) {
            alert("Password must contain at least one lowercase letter");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        handleSignUp(auth, email, password)
            .then((result) => {
                const user = result.user;
                alert("Registration successful");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    return (
        <div className="mx-auto justify-center my-10">
            <section className="lg:justify-end md:w-full">
                <div className="md:mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-[#DFD9D4] dark:text-gray-800">
                    <h1 className="text-4xl font-extrabold text-center dark:text-[#E93F56]">Register</h1>
                    <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
                        {/* Name */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                            <input type="text" name="name" id="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                        </div>
                        {/* email */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="username" placeholder="You're Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                        </div>
                        {/* Password */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="Password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                        </div>
                        {/*Confirm Password */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="confirmPassword" className="block dark:text-gray-600">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600" />
                        </div>
                        <button type='submit' className="block w-full p-3 text-center font-bold text-[20px] rounded-sm dark:text-gray-50 dark:bg-[#E93F56]">Register</button>
                    </form>

                    <p className="text-center font-bold text-[20px]">Or</p>

                    {/* <div onClick={handleLoginWithGoogle} className="flex justify-center space-x-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4  rounded-md focus:ring-2 focus:ring-offset-2 dark:border-gray-600 focus:dark:ring-[#E93F56] bg-[#F9FAFB]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <FcGoogle size={35}></FcGoogle>
                            </svg>
                            <p>Continue with Google</p>
                        </button>
                    </div> */}
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <NavLink to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-[#E93F56] font-bold ml-2">Login</NavLink>
                    </p>
                </div>

            </section>
        </div>
    );
};

export default Register;