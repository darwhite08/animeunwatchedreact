import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { SideGraidentButton } from "../../buttons/stylish_buttons";
import { useNavigate } from 'react-router-dom';

const LoginSingupPage = () => {

    const handleGoogleLogin = async () => {
        window.location.href = '/api/auth/google'
               // Simulate login logic
               const loginSuccess = true;
    
            //    if (loginSuccess) {
            //      onLogin(); // Update authentication state
            //      navigate('/login'); // Redirect to HeroMainPage
            //    }
    };
    const handleAppleLogin = () => {
        window.location.href = '/api/auth/apple'
    };
    const handleFacebookLogin = () => {
        window.location.href = '/api/auth/facebook'
    };
    return (
        <div className="flex w-screen flex-wrap text-slate-800">
            <div className="hidden h-screen md:flex md:w-1/2 bg-[url('assets/background/universeGirl.png')] bg-cover bg-no-repeat">
                <div className="relative flex flex-col  items-center justify-center w-full h-full ">  
                    <p className="absolute top-10  inline-flex justify-center w-full">
                        <span className="text-center w-fit rounded-full bg-blue-300 background-blur-lg px-3 py-1 font-bold text-blue-600">Anime Unwatched.</span>
                    </p>
                    {/* <div className="absolute bottom-4 bg--300  rounded-lg">
                    <div className="flex flex-col items-center  px-4 py-10">
                    <div className=" flex text-center text-violet-800  flex-col items-center  mx-auto rounded-r-3xl py-4 ">
                        <h1 class=" text-3xl font-extrabold dark:text-white md:text-5xl lg:text-6xl">Discover, Rate, and Rank </h1>
                        <p className="text-4xl font-bold text--600"> Your Favorite Anime!"</p>
                    </div>
                    <SideGraidentButton buttonName='Explore Now' />
                    </div>
                    </div> */}
                </div>
            </div>
            <div className="flex w-full flex-col md:w-1/2">
                <div className="flex justify-center pt-12 md:justify-start md:pl-12">
                    <a href="#" className="text-2xl font-bold text-blue-600">
                        Anime Unwatched.
                    </a>
                </div>
                <div className="my-14 mx-auto flex flex-col items-center justify-center px-6 pt-3 md:justify-start ">
                    <div className="mb-4 flex flex-col items-center ">
                        <p className=" bg-green-300 text-green-600 rounded-3xl px-4 py-1 my-2 text-xl font-semibold leading-10">
                            Start your new Journey{" "}
                            {/* <span className="mx-auto block w-fit whitespace-nowrap rounded-xl bg-orange-300 py-1 px-6 mt-2 text-orange-600">
                            Join Now
                        </span> */}
                        </p>
                        <p className="text-center  text-3xl font-bold md:text-left md:leading-tight">
                            Create your free account
                        </p>
                        <p className="mt-2 text-center font-medium md:text-left">
                            Already using Anime Unwatched?{" "}
                            <a href="/login" className="whitespace-nowrap font-semibold text-blue-700">
                                Login here
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <hr className="flex-1 border-t border-gray-300" />
                        <span className="mx-4 text-sm font-medium text-gray-500">signup with</span>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mt-4">
                        <button
                            type="button"
                            className="gap-4 w-52 py-2.5 flex flex-row px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                            onClick={handleAppleLogin}
                        >
                            <FaApple size={20} />
                            <span className="px-8 border-l-2">Apple ID</span>
                        </button>
                        <button
                            type="button"
                            className="gap-4 w-52 py-2.5 flex flex-row px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                            onClick={handleGoogleLogin}
                        >
                            <FcGoogle size={20} />
                            <span className="px-8 border-l-2">Google</span>
                        </button>
                        <button
                            type="button"
                            className="gap-4 w-52 py-2.5 flex flex-row px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                            onClick={handleFacebookLogin}
                        >
                            <span className="text-blue-600"><FaFacebook size={20} /></span>
                            <span className="px-8 border-l-2">Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSingupPage;
