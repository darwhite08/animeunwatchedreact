import React, { useState, useEffect } from "react";
import TinymiceEditor from "./text_editor";
import axios from "axios";
import DynamicComponent from "./dynamic_comp";
import { Fullscreen, Save } from "lucide-react";

function BlogContentWriting() {
    const [blogContent, setBlogContent] = useState(""); // 🟢 Stores input
    const [jsxComponent, setJsxComponent] = useState(""); // 🟢 Stores JSX output
    const [previewContentOpen, setPreviewContentOpen] = useState(true)

    // ✅ Fetch latest saved content when the component mounts
    useEffect(() => {
        const fetchLatestContent = async () => {
            try {
                const response = await axios.get("/api/blog/blogcontent/latest"); // ✅ Adjust API endpoint
                if (response.status === 200) {
                    setBlogContent(response.data.content);
                }
            } catch (error) {
                console.error("Failed to fetch latest blog content:", error);
            }
        };

        fetchLatestContent();
    }, []); // ✅ Runs only once when mounted

    // ✅ Function to Save Blog Content
    const saveBlogContent = async () => {
        if (!blogContent.trim()) {
            return;
        }
        try {
            const response = await axios.post("/api/blog/blogcontent/save", {
                content: blogContent
            });

            if (response.status === 200) {
                setJsxComponent(response.data.data); // ✅ Store JSX safely
            }
        } catch (error) {
            console.error("Failed to save blog content:", error);
            alert("Failed to save blog content.");
        }
    };
    const previewBlogContent = async () => {
        if (!blogContent.trim()) {
            return;
        }
        try {
            const response = await axios.post("/api/blog/blogcontent/save", {
                content: blogContent
            });

            if (response.status === 200) {
                setJsxComponent(response.data.data); // ✅ Store JSX safely
            }
        } catch (error) {
            console.error("Failed to save blog content:", error);
            alert("Failed to save blog content.");
        }
    };
    const closePreviewContentTab = ()=>{
        setPreviewContentOpen(false)
    }

    return (
        <div className="pt-10 pl-10 pr-10">
            {/* Header */}
            <div className="pb-6 flex flex-row justify-between items-center">
                <p className="text-2xl text-gray-500">Write content below...</p>

                <div className="flex flex-row gap-2">
                    <button
                        onClick={saveBlogContent}
                        type="button"
                        className="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        <span>Save </span>
                        <span><Save size={15} /></span>
                    </button>
                    <button
                        onClick={previewBlogContent}
                        type="button"
                        className="inline-flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        <span>preview</span>
                        <span><Fullscreen size={20} /></span>
                    </button>
                </div>
            </div>

            {/* TinyMCE Editor */}
            <div className="mb-6">
                <TinymiceEditor value={blogContent} onChange={setBlogContent} />
            </div>

            {/* JSX Rendered Component */}
            {(jsxComponent && previewContentOpen) && (
                <div className="fixed top-0 left-0 w-full z-[60] border-t  bg-white min-h-screen">
                    <div className="text-lg inline-flex justify-between w-full px-10 text-gray-700 mt-6">
                        <p>Content Prview:</p>
                        <button onClick={closePreviewContentTab} className="bg-red-200 text-red-800 px-4 rounded-lg">close</button>
                    </div>
                    <div className="border p-8 mx-10 mt-4 rounded-lg bg-gray-100">
                        <DynamicComponent jsxString={jsxComponent} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogContentWriting;
