import React, { Suspense } from "react";
import TinymiceEditor from "./content/blog_post_write/text_editor";
import BlogSidebar from "./sidebar/blog_sidebar";
import BlogPostSteps from "./content/stepper";
import { Routes, Route } from 'react-router-dom';
import CreateBlogPostFileNameInput from "./content/blog_create_edit/create_post_option";
import EditBlogPostFileName from "./content/blog_create_edit/edit_post_option";
import BlogCoverPhotoUpload from "./content/blog_details/conver_photo";
import BlogHeadingInput from "./content/blog_details/heading";
import ReviewDocument from "./content/final_draft/main";

function PostBlogsMainComp() {
    return (
        <div className="container flex">
            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg pt-10">
                <BlogSidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-5 mt-5 ml-72 px-10 w-full">

                {/* Blog Steps */}
                <div className="px-10 pt-6 w-full ">
                    <BlogPostSteps />
                </div>

                {/* Routes for Creating and Editing Blog */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="pt-10 px-4">
                                    <h1 className="mb-2">Create Blog File</h1>
                                    <CreateBlogPostFileNameInput />
                                    <EditBlogPostFileName />
                                </div>
                            }
                        />
                        <Route
                            path="/heading"
                            element={
                                <div>
                                    <BlogHeadingInput />
                                    <div className="pt-5">
                                        <h1 className="px-10">Upload Cover Photo</h1>
                                        <BlogCoverPhotoUpload />
                                    </div>
                                </div>
                            }
                        />
                        <Route
                            path="/content"
                            element={
                                <div className="pt-10 pl-10">
                                    <div className="pb-6 flex flex-row justify-between items-center">
                                        <p className="text-2xl text-gray-500">Write content below...</p>
                                        <button
                                            type="button"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                        >
                                            Save
                                        </button>
                                    </div>
                                    <TinymiceEditor />
                                </div>
                            }
                        />
                        <Route
                            path="/finaldraft"
                            element={
                                <div>
                                    <ReviewDocument />
                                </div>
                            }
                        />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

export default PostBlogsMainComp;
