import React, { useContext } from 'react';
import { sharedContext } from '../Layout/RootsLayout';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { ImGift } from 'react-icons/im';

const Edit = () => {
    const { currentUser } = useContext(sharedContext);
    const navigate = useNavigate()
    const handleProfileEdits = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log('submitted', name, photo);

        updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                navigate('/profile')
            }).catch((err) => console.log(err.message));

    }


    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 mx-auto my-20 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Edit Profile</h1>
            </div>
            <form onSubmit={handleProfileEdits} noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Jhon Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>

                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm">Image URL  <p className="text-xs text-gray-400">Upload your image on <a className='text-gray-500 text-sm underline font-semibold' href="https://imgbb.com/" target='_blank'>imgbb.com</a> and paste the link here</p></label>
                        <input type="text" name="photo" id="photo" placeholder="https://imgbb.com/" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>

                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-purple-600 dark:text-gray-50">Update</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Edit;