import React, { useState } from "react";
import { FaBold, FaItalic, FaPaperclip, FaSmile, FaAt, FaThumbsUp, FaThumbsDown, FaReply, FaEllipsisH, FaSort } from "react-icons/fa";

const BlogCommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Noah Pierre",
      time: "58 minutes ago",
      avatar: "https://i.pravatar.cc/40?img=3",
      text: "I'm a bit unclear about how condensation forms in the water cycle. Can someone break it down?",
      likes: 25,
      dislikes: 3,
      replies: [
        {
          id: 2,
          name: "Skill Sprout",
          time: "8 minutes ago",
          avatar: "https://i.pravatar.cc/40?img=8",
          text: "Condensation happens when water vapor cools down and changes back into liquid droplets. It’s the step before precipitation.",
          likes: 2,
          dislikes: 0,
        },
      ],
    },
    {
      id: 3,
      name: "Mollie Hall",
      time: "5 hours ago",
      avatar: "https://i.pravatar.cc/40?img=5",
      text: "I really enjoyed today’s lesson on the water cycle! The animations made the processes much easier to grasp.",
      likes: 10,
      dislikes: 1,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: comments.length + 1,
      name: "You",
      time: "Just now",
      avatar: "https://i.pravatar.cc/40?img=1",
      text: newComment,
      likes: 0,
      dislikes: 0,
      replies: [],
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center p-6">
      <div className="bg-white/80 backdrop-blur-lg w-full max-w-2xl rounded-xl shadow-lg p-6 border border-gray-200">
        {/* Comment Input */}
        <div className="border rounded-lg p-4 bg-gray-100">
          <textarea
            rows="2"
            className="w-full border-none bg-transparent text-gray-900 resize-none focus:outline-none placeholder-gray-600"
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-3 text-gray-500">
              <FaBold className="cursor-pointer hover:text-gray-700 transition" />
              <FaItalic className="cursor-pointer hover:text-gray-700 transition" />
              <FaPaperclip className="cursor-pointer hover:text-gray-700 transition" />
              <FaSmile className="cursor-pointer hover:text-gray-700 transition" />
              <FaAt className="cursor-pointer hover:text-gray-700 transition" />
            </div>
            <button
              onClick={handlePostComment}
              className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-all"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Comments ({comments.length})</h2>
            <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-800 transition">
              <FaSort className="mr-1" />
              <span>Most recent</span>
            </div>
          </div>

          {/* Comment List */}
          {comments.map((comment) => (
            <div key={comment.id} className="mt-5">
              <div className="flex items-start space-x-4">
                {/* Profile & Thread Line */}
                <div className="relative">
                  <img src={comment.avatar} alt="Avatar" className="w-10 h-10 rounded-full shadow-md" />
                  {comment.replies.length > 0 && (
                    <div className="absolute left-1/2 top-12 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>
                  )}
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-gray-900">{comment.name}</span>{" "}
                      <span className="text-gray-500 text-sm">{comment.time}</span>
                    </div>
                    <FaEllipsisH className="text-gray-500 cursor-pointer hover:text-gray-700 transition" />
                  </div>
                  <p className="text-gray-700 mt-2 leading-relaxed">{comment.text}</p>

                  {/* Like, Dislike, Reply Buttons */}
                  <div className="flex items-center space-x-4 mt-2 text-gray-500 text-sm">
                    <button className="flex items-center hover:text-orange-500 transition">
                      <FaThumbsUp className="mr-1" /> {comment.likes}
                    </button>
                    <button className="flex items-center hover:text-gray-700 transition">
                      <FaThumbsDown className="mr-1" /> {comment.dislikes}
                    </button>
                    <button className="flex items-center hover:text-blue-500 transition">
                      <FaReply className="mr-1" /> Reply
                    </button>
                  </div>

                  {/* Replies Section */}
                  {comment.replies.length > 0 && (
                    <div className="ml-10 mt-3 border-l-2 pl-3 border-gray-300">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="mt-3 flex space-x-3">
                          {/* Profile & Thread Line for Replies */}
                          <div className="relative">
                            <img src={reply.avatar} alt="Avatar" className="w-8 h-8 rounded-full shadow-sm" />
                            <div className="absolute left-1/2 top-10 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>
                          </div>

                          <div className="w-full">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="font-semibold text-gray-900">{reply.name}</span>{" "}
                                <span className="text-gray-500 text-sm">{reply.time}</span>
                              </div>
                              <FaEllipsisH className="text-gray-500 cursor-pointer hover:text-gray-700 transition" />
                            </div>
                            <p className="text-gray-700 mt-1">{reply.text}</p>
                            <div className="flex items-center space-x-4 mt-2 text-gray-500 text-sm">
                              <button className="flex items-center hover:text-orange-500 transition">
                                <FaThumbsUp className="mr-1" /> {reply.likes}
                              </button>
                              <button className="flex items-center hover:text-gray-700 transition">
                                <FaThumbsDown className="mr-1" /> {reply.dislikes}
                              </button>
                              <button className="flex items-center hover:text-blue-500 transition">
                                <FaReply className="mr-1" /> Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCommentSection;
