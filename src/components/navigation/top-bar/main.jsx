import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
    const [dropdown1Open, setDropdown1Open] = useState(false);
    const [dropdownBalOpen, setDropdownBalOpen] = useState(false);
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
                            <li className="relative">
                                <button
                                    onClick={() => setDropdownBalOpen(!dropdownBalOpen)}
                                    className="hover:text-blue-500 focus:outline-none"
                                >
                                    Best anime List
                                </button>
                                {dropdownBalOpen && (
                                    <div className="absolute grid grid-cols-4 gap-x-10 w-max flex flex-col gap-2 -right-96 top-12 mt-0 bg-black/70 backdrop-blur-md border rounded  py-4 px-10 rounded-lg">
                                        <div className="h-min">
                                            <h3>Target Audience</h3>
                                            <ul className="space-y-1 mt-2">
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/shounen" className="">Shonen</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/shoujo" className="">Shojo</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/seinen" className="">Seinen</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/josei" className="">Josei</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/kodomo" className="">Kodomo</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/redikomi" className="">Redikomi</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">                                                  
                                                    <Link to="/bestanimelist/yaoi" className="">Yaoi</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">                                                 
                                                    <Link to="/bestanimelist/yuri" className="">yuri</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/hentai" className="">Hentai</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="h-min">
                                            <h3>Content Based</h3>
                                            <ul className="space-y-1 mt-2">
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/shounen" className="">Isekai </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="/bestanimelist/shoujo" className="">Harem / Reverse Harem</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="" className="">Ecchi</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="" className="">Mecha</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="" className="">Sports </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="" className="">Idol</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="" className="">Gore </Link>
                                                </li>

                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="" className="">Psychological Thriller</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="h-min">
                                            <h3>by themes</h3>
                                            <ul className="space-y-1 mt-2">
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shounen" className="">Coming of Age</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shoujo" className="">Friendship & Rivalry</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Revenge</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Post-Apocalyptic</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Time Travel</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Tragedy</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Redemption</Link>
                                                </li>

                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Philosophical / Existentialism</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Dystopian / Utopian</Link>
                                                </li>

                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">
                                                    <Link to="" className="">Cultural / Mythological</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="h-min">
                                            <h3>By Genere</h3>
                                            <ul className="space-y-1 mt-2">
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shounen" className="">Action</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shoujo" className="">Adventure </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Romance  </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Comedy </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Drama  </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Slice of Life </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shounen" className="">Fantasy</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shoujo" className="">Supernatural </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Horror</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Psychological</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Sci-Fi </Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="h-min">
                                            <h3>By tone</h3>
                                            <ul className="space-y-1 mt-2">
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shounen" className="">Wholesome</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shoujo" className="">Dark / Grimdark</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Satirical / Parody </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Surreal / Experimental</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="h-min">
                                            <h3>By Culture Origin</h3>
                                            <ul className="space-y-1 mt-2">
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shounen" className="">Japanese Mythology</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shoujo" className="">Feudal Japan</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Western/Fantasy Europe </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Modern Urban Japan </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Sci-fi Future / Cyberpunk  </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="h-min">
                                            <h3>By Format</h3>
                                            <ul className="space-y-1 mt-2">
                                                <li className="hover:bg-white/10 hover:backdrop-blur-md hover:rounded hover:px-2 transition-all duration-200 hover:py-1">

                                                    <Link to="/bestanimelist/shounen" className="">TV Series</Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="/bestanimelist/shoujo" className="">OVA (Original Video Animation) </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">ONA (Original Net Animation)  </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Anime Films  </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Shorts  </Link>
                                                </li>
                                                <li className="hover:bg-white/10 hover:backdrop-blur-sm hover:rounded hover:px-2 transition-all duration-300 hover:py-1">

                                                    <Link to="" className="">Music Videos </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
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
                                    <ul className="absolute text-white grid rounded-lg bg-black/70 backdrop-blur-md grid-cols-2 px-6 py-6 gap-x-6 gap-y-3  text-sm w-max left-5 mt-4  border border-white rounded outline-non">
                                        <li className="">
                                            <Link to="/animecountdown" className="">Anime count Down</Link>
                                        </li>
                                        {/* <li className="">
                                            <Link to="/animebyyear" className="">Anime by year</Link>
                                        </li> */}
                                        {/* <li className="">
                                            <Link to="/animeleaderboard" className="">Anime Leaderboard</Link>
                                        </li> */}
                                        <li className="">
                                            <Link to="/upcomminganime" className="">Upcomming Anime</Link>
                                        </li>
                                        {/* <li className="">
                                            <Link to="/recommendedanime" className="">Recommended Anime</Link>
                                        </li> */}
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
                            {/* <li className="relative">
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
                            </li> */}
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
