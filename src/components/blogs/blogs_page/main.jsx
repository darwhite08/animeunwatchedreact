import React from "react";
import BlogPostHeader from "./comp/blog_header";
import BlogReactionTab from "./reactions_tab";
import BlogCommentSection from "../comments/main";



function BlogsPage(params) {
    return (
        <div className="static flex flex-row justify-between w-full">
            <div className="min-h-screen bg-gray-100 w-40">
                <BlogReactionTab /> 
            </div>
            <div className=" w-full ">
                <div className="">
                <BlogPostHeader />
                <BlogCommentSection/>

                </div>
            </div>
            <div className="max-w-md w-full bg-gray-100 min-h-screen">
            </div>
        </div>
    );
}

export default BlogsPage;