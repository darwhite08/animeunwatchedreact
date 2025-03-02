import React from "react";
import { FaShare, FaUserEdit } from "react-icons/fa";



function ProfileUserEditOptions(params) {
    return (
        <div className="flex flex-row gap-2 -ml-2 pt-4">
            <button type="button" class="py-2.5 px-5  mb-2 text-sm inline-flex gap-1 items-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-200 hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "><span>Share profile </span><span></span><FaShare /></button>
            <button type="button" class="py-2.5 px-5  mb-2 text-sm inline-flex gap-1 items-center font-medium text-gray-900 focus:outline-none bg-black text-white rounded-lg border-2 border-gray-200 hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "><span>Edit profile</span><span><FaUserEdit /></span></button>
        </div>
    );
}

export { ProfileUserEditOptions }