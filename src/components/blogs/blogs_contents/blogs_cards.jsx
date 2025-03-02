import { useState } from "react";

const BlogPostCards = () => {
  const [reactions, setReactions] = useState(22);
  const [comments, setComments] = useState(9);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto">
      {/* Author Info */}
      <div className="flex items-center mb-2">
        <img
          src="https://picsum.photos/200/300"
          alt="Author Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="font-semibold">Anime Blogger</h4>
          <p className="text-sm text-gray-500">Feb 23 (4 days ago)</p>
        </div>
      </div>
      {/* Blog Title */}
      <h2 className="text-xl font-bold mb-2">
        Top 10 Must-Watch Anime of the Year: A Complete Guide
      </h2>
      {/* Tags */}
      <div className="flex gap-2 text-blue-500 text-sm mb-2">
        <span>#anime</span>
        <span>#manga</span>
        <span>#top10</span>
        <span>#recommendations</span>
      </div>
      {/* Reactions & Comments */}
      <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
        <div className="flex items-center gap-2">
          <span>❤️🔥😲</span>
          <span>{reactions} Reactions</span>
        </div>
        <div>
          <span>💬 {comments} Comments</span>
        </div>
        <div>
          <span>3 min read</span>
        </div>
      </div>
      {/* Featured Comment */}
      <div className="bg-gray-100 p-3 rounded-md text-sm mb-2">
        <p>
          <strong>AnimeFan123</strong> 3 days ago
        </p>
        <p>
          I would also add *Attack on Titan Final Season* to this list. It's been a masterpiece so far!
        </p>
      </div>
      {/* View All Comments */}
      <p className="text-blue-500 cursor-pointer">See all {comments} comments</p>
    </div>
  );
};

export default BlogPostCards;
