import React from "react";
import BlogTags from "./tags";

function BlogsSectionSideBar(params) {
    return (
        <div className="min-h-screen w-full border-l-2 bg-gray-100  ">
            <div className="px-5 py-4">
                <BlogTags />
            </div>
        </div>
    )
}

export default BlogsSectionSideBar;