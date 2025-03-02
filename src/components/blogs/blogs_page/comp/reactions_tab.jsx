import React from "react";

const BlogReactionTab = () => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 bg-white/20 backdrop-blur-lg shadow-xl p-4 rounded-2xl border border-white/30">
      <button className="flex flex-col items-center text-red-500 hover:scale-125 transition-transform duration-300 hover:shadow-lg hover:brightness-110 active:scale-100">
        ❤️ <span className="text-gray-700 text-sm mt-1">120</span>
      </button>
      <button className="flex flex-col items-center text-blue-500 hover:scale-125 transition-transform duration-300 hover:shadow-lg hover:brightness-110 active:scale-100">
        💬 <span className="text-gray-700 text-sm mt-1">34</span>
      </button>
      <button className="flex flex-col items-center text-yellow-500 hover:scale-125 transition-transform duration-300 hover:shadow-lg hover:brightness-110 active:scale-100">
        🔄 <span className="text-gray-700 text-sm mt-1">10</span>
      </button>
    </div>
  );
};

export default BlogReactionTab;
