import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { ProfileUserLevelComp } from "./profile_comp/user_level_comp";
import StreakCard from "./profile_comp/streak";

function UserProfile() {
    const [showActions, setShowActions] = useState(false);

    return (
        <div>
            <div className="w-full bg-white -mt-10 relative">
                {/* Cover Image */}
                <div className="h-32 bg-gradient-to-r from-orange-200 to-pink-200"></div>

                {/* Profile Details */}
                <div className="px-6 pb-6 relative">
                    {/* Profile Image */}
                    <div className="absolute -top-10 left-6 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                        <img
                            src="https://picsum.photos/200"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* More Options Icon */}
                    <div className="absolute right-4 top-4 cursor-pointer text-gray-500" onClick={() => setShowActions(!showActions)}>
                        <MoreHorizontal size={20} />
                    </div>

                    {/* Action Tab */}
                    {showActions && (
                        <div className="absolute right-4 top-10 bg-white shadow-md rounded-md w-40 py-2">
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Edit Profile</button>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Settings</button>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                        </div>
                    )}

                    {/* User Info */}
                    <div className="pt-8">
                        <h2 className="text-xl font-semibold">Amanda Smith</h2>
                        <p className="text-gray-500 flex items-center space-x-2 mt-1">
                            <span>🇺🇸</span>
                            <span>Los Angeles, United States</span>
                        </p>

                        {/* Username & Role */}
                        <div className="flex items-center space-x-2 mt-2 text-gray-600">
                            <span className="font-medium">@amanda21</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="font-medium">💼 Lead Product Designer at Google</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-500">Full-time</span>
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-3 mt-4">
                            <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 transition">
                                Message
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                Share profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between w-full bg-gray-100 py-4 px-10">
                <div>
                <StreakCard/>
                </div>
                <div className="">
                    <ProfileUserLevelComp />
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
