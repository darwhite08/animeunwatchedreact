import React, { Suspense } from "react";
import { Routes, Route,Navigate } from 'react-router-dom';
import BlogNavigationBar from "./navigation/navbar";
import BlogWhatsNewSection from "./blogs_contents/overview_Section";
import BlogNavigation from "./navigation/navigation";
import BlogsSectionSideBar from "./blog_sidebar/main";
import BlogsPostCards from "./blogs_contents/blogs_cards"
import BlogsPage from "./blogs_page/main";
import PostBlogsMainComp from "./dashboard/main";

const BlogsSection = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Navigation Bar */}
      <div className="w-full">
        <BlogNavigationBar />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/home"
            element={
              <div>
                {/* What's New Section */}
                <div className="pt-10 w-full">
                  <BlogWhatsNewSection />
                </div>
                {/* Blog Navigation & Content */}
                <div className="flex flex-col w-full">
                  {/* Blog Navigation */}
                  <div className="px-10 border-b-2 pb-2 sticky top-[10%] bg-white z-10">
                    <BlogNavigation />
                  </div>
                  {/* Main Content & Sidebar */}
                  <div className="relative flex flex-row justify-between">
                    {/* Main Content Area */}
                    <div className="basis-7/12 py-10 px-10 flex flex-col gap-2">
                      {/* Add blog content here */}
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <BlogsPostCards/>
                      <div>
                        {/* load more */}
                      </div>
                    </div>
                    {/* Sidebar */}
                    <div className="max-h-screen flex flex-col sticky top-[20%]  basis-5/12">
                      <BlogsSectionSideBar />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        {/* <Route path="*" element={<Navigate to="/blog/home" />} /> */}
        <Route path="/tag" element={<BlogsPage />} />
        <Route path="postblogs/*" element={<PostBlogsMainComp />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default BlogsSection;
