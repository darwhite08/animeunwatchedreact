import { useState } from "react";

const BlogTags = () => {
  const [selectedTags, setSelectedTags] = useState(["Tech", "AI"]);
  const [searchTag, setSearchTag] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const availableTags = [
    "Tech",
    "AI",
    "Programming",
    "Web Development",
    "React",
    "JavaScript",
    "Python",
    "Machine Learning",
    "Cybersecurity",
    "Cloud Computing"
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) => [...prev, tag]);
    setSearchTag("");
    setShowDropdown(false);
  };

  const removeTag = (tag) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const filteredTags = availableTags.filter((tag) =>
    tag.toLowerCase().includes(searchTag.toLowerCase()) && !selectedTags.includes(tag)
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-3">Select your favorite blog tags</h2>
      <div className="relative">
        <input
          type="text"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          placeholder="Search and select tags..."
          className="w-full p-2 border rounded-md text-sm mb-3"
        />
        {showDropdown && filteredTags.length > 0 && (
          <div className="absolute bg-white border rounded-md shadow-md w-full mt-1 max-h-40 overflow-y-auto">
            {filteredTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className="block w-full text-left px-3 py-1 hover:bg-gray-100"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {selectedTags.map((tag) => (
          <div key={tag} className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
            {tag}
            <button onClick={() => removeTag(tag)} className="ml-2 text-white font-bold">×</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
