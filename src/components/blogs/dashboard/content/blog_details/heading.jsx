import React, { useState } from "react";

const BlogHeadingInput = () => {
    const [heading, setHeading] = useState("");
    const [tagsVisible, setTagsVisible] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const availableTags = [
        { name: "#webdev", description: "Because the internet..." },
        { name: "#programming", description: "The magic behind computers. 💻 ✨" }
    ];

    const toggleTags = () => {
        setTagsVisible(!tagsVisible);
    };

    const selectTag = (tag) => {
        if (selectedTags.length < 4 && !selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const removeTag = (tag) => {
        setSelectedTags(selectedTags.filter(t => t !== tag));
    };

    return (
        <div className="w-full mx-auto p-6 bg-white ">
            <input
                type="text"
                className="w-full text-5xl font-bold p-2 outline-none"
                placeholder="New post title here..."
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
            />
            <div className="mt-4 text-lg text-gray-500 cursor-pointer hover:text-blue-500" onClick={toggleTags}>
                Add up to 4 tags...
            </div>
            {tagsVisible && (
                <div className="mt-2 bg-white border rounded-md p-4 shadow-md">
                    {availableTags.map((tag, index) => (
                        <div key={index} className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800" onClick={() => selectTag(tag.name)}>
                            {tag.name}
                            <div className="text-sm text-gray-500">{tag.description}</div>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
                {selectedTags.map((tag, index) => (
                    <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-blue-700" onClick={() => removeTag(tag)}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BlogHeadingInput;
