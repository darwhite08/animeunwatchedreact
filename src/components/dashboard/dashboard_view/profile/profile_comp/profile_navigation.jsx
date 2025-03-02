import React from "react";
import { Link } from "react-router-dom";  // Correct import

function ProfileUserNavigation() {
    return (
        <nav className="flex flex-row gap-8 text-sm font-medium border-b pb-1.5 border-blue-300">
            <p className="relative group">
                <Link to="/profile/user/me" className="hover:font-semibold transition duration-300 ease-in-out">
                    Me
                </Link>
                <span className="absolute -left-2 -bottom-2 w-0 h-[3px] bg-blue-800 rounded-full transition-all duration-300 group-hover:w-10"></span>
            </p>
            <p className="relative group">
                <Link to="/profile/user/posts" className="hover:font-semibold transition duration-300 ease-in-out">
                    Posts
                </Link>
                <span className="absolute -left-2 -bottom-2 w-0 h-[3px] rounded-full bg-blue-800 transition-all duration-300 group-hover:w-14"></span>
            </p>
            <p className="relative group">
                <Link to="/profile/user/watchlist" className="hover:font-semibold transition duration-300 ease-in-out">
                    Watchlist
                </Link>
                <span className="absolute -left-3 -bottom-2 rounded-full w-0 h-[3px] bg-blue-800 transition-all duration-300 group-hover:w-20"></span>
            </p>
            <p className="relative group">
                <Link to="/profile/user/read-later" className="hover:font-semibold transition duration-300 ease-in-out">
                    Read Later
                </Link>
                <span className="absolute -left-3 rounded-full -bottom-2 w-0 h-[3px] bg-blue-800 transition-all duration-300 group-hover:w-24"></span>
            </p>
            <p className="relative group">
                <Link to="/profile/user/trophies" className="hover:font-semibold transition duration-300 ease-in-out">
                    Trophies
                </Link>
                <span className="absolute rounded-full -left-2 -bottom-2 w-0 h-[3px] bg-blue-800 transition-all duration-300 group-hover:w-20"></span>
            </p>
            <p className="relative group">
                <Link to="/profile/user/events" className="hover:font-semibold transition duration-300 ease-in-out">
                    Events
                </Link>
                <span className="absolute -left-2 rounded-full -bottom-2 w-0 h-[3px] bg-blue-800 transition-all duration-300 group-hover:w-14"></span>
            </p>
        </nav>
    );
}

export { ProfileUserNavigation };
