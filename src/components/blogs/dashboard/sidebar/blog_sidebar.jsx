import React, { useState } from "react";
import { Folder, Plus, Star } from "lucide-react";
import axios from "axios";

export default function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([
    "Python",
    "React",
    "FastAPI",
    "Docker",
    "Machine Learning",
  ]);
  const [newFolder, setNewFolder] = useState("");
  const [showInput, setShowInput] = useState(false);

  const recentPosts = [
    { id: 1, title: "Understanding React Hooks", url: "#" },
    { id: 2, title: "A Guide to FastAPI", url: "#" },
    { id: 3, title: "Why You Should Learn Python", url: "#" },
    { id: 4, title: "Dockerizing Your Flask App", url: "#" },
  ];

  const filteredPosts = recentPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addFolder = () => {
    if (newFolder.trim()) {
      setCategories([...categories, newFolder]);
      setNewFolder("");
      setShowInput(false);
    }
  };

  return (
    <aside className="w-full md:w-80 bg-white max-h-screen overflow-hidden rounded-lg px-5 pb-10 pt-14 border-r-2">
      {/* Create Post Button */}
      <div className="mb-4">
        <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
          Create New Post
        </button>
      </div>

      {/* 🔍 Search Bar */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Search</h3>
        <input
          type="text"
          placeholder="Search blog..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 📌 Recent Posts */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id} className="mb-2">
              <a href={post.url} className="text-blue-600 hover:text-blue-800 transition">
                {post.title}
              </a>
            </li>
          ))}
          {filteredPosts.length === 0 && <p className="text-gray-500">No posts found.</p>}
        </ul>
      </div>

      {/* 📂 Favorites */}
      <div>
        <div className="flex flex-row items-center text-sm justify-between mb-1 text-gray-500">
          <h3 className="">Favorites</h3>
          <button><Star size={15} /></button>
        </div>
        <ul className="mb-4">
          <li className="">
            <p className="text-gray-600 inline-flex items-center text-sm">
              <span>Nothing to show here</span>
            </p>
          </li>
        </ul>
      </div>

      {/* 📂 Categories */}
      <div>
        <div className="flex flex-row items-center text-sm justify-between mb-4 text-gray-500">
          <h3 className="">Folder</h3>
          <button onClick={() => setShowInput(true)}><Plus size={20} /></button>
        </div>
        {showInput && (
          <div className="mb-2 flex gap-2">
            <input
              type="text"
              placeholder="New folder name"
              value={newFolder}
              onChange={(e) => setNewFolder(e.target.value)}
              className="border px-2 py-1 rounded-md w-full"
            />
            <button onClick={addFolder} className="text-white bg-blue-500 px-3 py-1 rounded-md">Add</button>
          </div>
        )}
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-1">
              <a href="#" className="text-gray-700 inline-flex items-center text-md gap-1 transition">
                <span><Folder size={20} /></span>
                <span>{category}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
