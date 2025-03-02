import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const AuthOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null; // Hide the overlay if not visible

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-md transition-opacity duration-300 ease-in-out">
            <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-8 px-12 relative transform transition-all scale-100">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full shadow hover:bg-gray-300 text-gray-600 hover:text-gray-800 transition duration-300"
                >
                    <IoClose size={20} />
                </button>

                <div className="flex flex-col gap-3 items-center">
                    <h2 className="text-xs font-semibold text-center text-yellow-800 bg-yellow-300 font-bold w-fit px-4 py-1 rounded-full">
                        Anime Unwatched
                    </h2>
                    <p className="font-bold px-5 py-2 rounded-lg uppercase text-sm bg-green-300 text-green-900 w-full text-center shadow-md">
                        Join our <span className="text-red-600">rapid</span> growing community
                    </p>
                </div>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-4 text-gray-500">Login with</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* Authentication Buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        type="button"
                        className="flex items-center gap-4 py-3 px-8 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 shadow-md transition duration-300"
                    >
                        <span className="pr-4 border-r-2 border-gray-300">
                            <FcGoogle size={20} />
                        </span>
                        <span>Continue with Google</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-4 py-3 px-8 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 shadow-md transition duration-300"
                    >
                        <span className="pr-4 border-r-2 border-gray-300">
                            <FaApple size={20} />
                        </span>
                        <span>Continue with Apple</span>
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{' '}
                    <a
                        href="#"
                        className="text-blue-600 font-semibold hover:underline transition duration-300"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AuthOverlay;
