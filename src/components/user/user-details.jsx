import React from "react";

function UserBar() {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div class="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <img src="/" alt="s" />
            </div>
            <div>
                <h1>Priyanshu Chandra</h1>
            </div>
        </div>
    );
}

export default UserBar