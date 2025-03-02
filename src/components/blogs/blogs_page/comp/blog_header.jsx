import React from "react";
import { BlogsHeaderAction } from "./share_comp";

function BlogPostHeader() {
    return (
        <div className="">
            <div>
                <img className="" src="/assets/blogs_media/background.jpg" alt="" />
            </div>
            <div className=" flex flex-col gap-2 mt-4 px-10">
                {/* User Info */}

                <div className="flex items-center space-x-3 ">
                    <img
                        src="https://picsum.photos/200/300" // Replace with actual image URL
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-900">Sk</p>
                        <p className="text-gray-500 text-sm">Posted on Feb 27</p>
                    </div>
                </div>
                {/* Reactions */}
                <div className="flex items-center space-x-4 mt-3 text-lg">
                    <div className="flex items-center space-x-1 text-red-500">
                        ❤️ <span className="text-gray-700 font-medium">35</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-500">
                        🦄 <span className="text-gray-700 font-medium">5</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                        🤯 <span className="text-gray-700 font-medium">5</span>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-500">
                        🙌 <span className="text-gray-700 font-medium">6</span>
                    </div>
                    <div className="flex items-center space-x-1 text-orange-500">
                        🔥 <span className="text-gray-700 font-medium">7</span>
                    </div>
                </div>
                {/* Header Actions */}
                <div>
                    <BlogsHeaderAction />
                </div>
                {/* Hashtags */}
                <div className="flex space-x-3 mt-2 text-sm font-medium items-center">
                    <span className="bg-black text-white px-2 py-0.5 rounded-lg">Tags</span>
                    <span className="text-yellow-500">#tutorial</span>
                    <span className="text-blue-500">#beginners</span>
                    <span className="text-yellow-400">#javascript</span>
                    <span className="text-gray-700">#assembly</span>
                </div>
            </div>
        </div>
    );
};

export default BlogPostHeader;
