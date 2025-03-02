import React from "react";
import { Forward,Bookmark,MessageCircle } from "lucide-react";

function BlogsHeaderAction(params) {
    return(
        <div className="flex flex-row justify-between mt-2">
            <div className="flex flex-row gap-2">
            <button type="button" class="py-2.5 px-5 inline-flex items-center gap-1 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><span>share post</span> <span><Forward size={20}/></span></button>
            <button type="button" class="py-2.5 px-5 inline-flex items-center gap-1 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><span>Join discussion</span> <span><MessageCircle size={20}/></span></button>
            </div>
            <div>
            <button type="button" class="py-2.5 px-5 inline-flex items-center gap-1 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><span><Bookmark size={20}/></span></button>
            </div>
        </div>
    );
}


export {BlogsHeaderAction};