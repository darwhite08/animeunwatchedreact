import React, { useState, useEffect } from "react";
import TinymiceEditor from "./text_editor";
import axios from "axios";
import DynamicComponent from "./dynamic_comp";

function BlogContentWriting() {
    const [blogContent, setBlogContent] = useState(""); // 🟢 Stores input
    const [jsxComponent, setJsxComponent] = useState(""); // 🟢 Stores JSX output

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
            alert("Blog content cannot be empty.");
            return;
        }

        try {
            const response = await axios.post("/api/blog/blogcontent/save", {
                content: blogContent
            });

            if (response.status === 200) {
                setJsxComponent(response.data.data); // ✅ Store JSX safely
                alert("Blog content saved successfully!");
            }
        } catch (error) {
            console.error("Failed to save blog content:", error);
            alert("Failed to save blog content.");
        }
    };

    return (
        <div className="pt-10 pl-10 pr-10">
            {/* Header */}
            <div className="pb-6 flex flex-row justify-between items-center">
                <p className="text-2xl text-gray-500">Write content below...</p>

                <div className="flex flex-row gap-2">
                    <button
                        onClick={saveBlogContent}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Save
                    </button>
                </div>
            </div>

            {/* TinyMCE Editor */}
            <div className="mb-6">
                <TinymiceEditor value={blogContent} onChange={setBlogContent} />
            </div>

            {/* JSX Rendered Component */}
            {jsxComponent && (
                <div className="mt-8 border-t pt-6">
                    <h2 className="text-lg font-semibold text-gray-700 mt-6">Rendered JSX Component:</h2>
                    <div className="border p-4 rounded bg-gray-100">
                        <DynamicComponent jsxString={jsxComponent} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogContentWriting;
