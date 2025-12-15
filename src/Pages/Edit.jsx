import React, { useContext } from 'react';
import { sharedContext } from '../Layout/RootsLayout';

const Edit = () => {
    const { currentUser } = useContext(sharedContext);

    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 mx-auto my-20 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
            </div>
            <form noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Name</label>
                        <input type="text" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Image URL</label>
                        <input type="text" name="email" id="email" placeholder="https://imgbb.com/" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <p className="">Upload your image on <a className='text-gray-500' href="https://imgbb.com/">imgbb.com</a> and paste the link here</p>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Name</label>
                        <input type="text" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>

                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-purple-600 dark:text-gray-50">Update</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Edit;