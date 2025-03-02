import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
    const [dropdown1Open, setDropdown1Open] = useState(false);
    const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
    const [dropdown2Open, setDropdown2Open] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/auth/status", {
                    withCredentials: true, // Include cookies for authentication
                });
                if (response.data.isAutherized) {
                    setIsLoggedIn(true);
                    localStorage.setItem("isLoggedIn", "true"); // Store login state
                }
            } catch (error) {
                console.error("User not logged in:", error);
            }
        };
        checkLoginStatus();
    }, []);

    const handleLogin = async () => {
        window.location.href = '/api/auth/google';
    };

    return (
        <div>
            <nav className="fixed w-full px-10 top-0  z-50">
                <div className="text-white px-5 py-1 bg-black/90 background-blur-lg rounded-full mt-2 ">
                    <div className="container px-10 flex flex-row gap-40 mx-auto px-4 py-3 flex justify-between items-center">
                        {/* Logo Section */}
                        <div className="text-md bg-blue-600 px-4 font-medium py-1 rounded-full">
                            <Link to="/">anime unwatched.</Link>

                        </div>

                        {/* Navigation Links */}
                        <ul className="flex space-x-6 text-md">
                            <li>
                                <Link to="/" className="hover:text-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="hover:text-blue-500">Blog</Link>
                            </li>
                            <li>
                                <Link to="/about-us" className="hover:text-blue-500">About us</Link>
                            </li>
                            {/* Drop Down 1 Anime */}
                            <li className="relative">
                                <button
                                    onClick={() => setDropdown1Open(!dropdown1Open)}
                                    className="hover:text-blue-500 focus:outline-none"
                                >
                                    Anime
                                </button>
                                {dropdown1Open && (
                                    <ul className="absolute text-black grid rounded-lg bg-white/30 backdrop-blur-lg grid-cols-2 px-6 py-6 gap-x-6 gap-y-2  text-sm w-max left-0 mt-2  border rounded shadow-lg">
                                        <li className="">
                                            <Link to="/animecountdown" className="">Anime count Down</Link>
                                        </li>
                                        <li className="">
                                            <Link to="/animebyyear" className="">Anime by year</Link>
                                        </li>
                                        <li className="">
                                            <Link to="/animeleaderboard" className="">Anime Leaderboard</Link>
                                        </li>
                                        <li className="">
                                            <Link to="/upcomminganime" className="">Upcomming Anime</Link>
                                        </li>
                                        <li className="">
                                            <Link to="/recommendedanime" className="">Recommended Anime</Link>
                                        </li>
                                        <li className="relative ">
                                            <button
                                                className=""
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setNestedDropdownOpen(!nestedDropdownOpen);
                                                }}
                                            >
                                                Best Anime List
                                            </button>
                                            {nestedDropdownOpen && (
                                                <ul className="absolute left-full flex flex-col gap-2  top-0 mt-0 bg-white border rounded shadow-lg  py-4 px-10 rounded-lg">
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/bestanimelist/shounen" className="">Shounen</Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="/bestanimelist/shoujo" className="">Shoujo</Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="" className="">Seinen </Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="" className="">Josei</Link>
                                                    </li>
                                                    <li className="hover:bg-gray-100">
                                                        <Link to="" className="">Kodomo</Link>
                                                    </li>

                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="/community" className="hover:text-blue-500">Community</Link>
                            </li>
                            <li>
                                <Link to="/action-figures" className="hover:text-blue-500">Action Figures</Link>
                            </li>
                            {/*  */}
                            <li className="relative">
                                <button
                                    onClick={() => setDropdown2Open(!dropdown2Open)}
                                    className="hover:text-blue-500 focus:outline-none"
                                >
                                    Dropdown 2
                                </button>
                                {dropdown2Open && (
                                    <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-40">
                                        <li className="hover:bg-gray-100">
                                            <Link to="/dropdown2-option-1" className="block px-4 py-2">Dropdown 2 Option 1</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>

                        {/* Login/Profile Section */}
                        <div className="flex items-center">
                            {isLoggedIn ? (
                                <Link
                                    to="profile/user"
                                >

                                    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-blue-500" src="https://picsum.photos/200/300" alt="Bordered avatar" />

                                </Link>
                            ) : (
                                <button
                                    onClick={handleLogin}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {/* This is where the nested route will render */}
            <Outlet />
        </div>
    );
};

export default Navbar;
