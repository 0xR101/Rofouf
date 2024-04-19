// PostComment.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const PostComment = ({ onNewComment }) => {
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() && rating !== 0) {
      onNewComment(commentText, rating);
      setCommentText("");
      setRating(0);
    }
  };

  return (
    <form
      className="bg-backGround p-4 rounded-lg shadow mt-4 flex flex-col md:flex-row justify-between items-start md:items-center"
      onSubmit={handleSubmit}
    >
      <textarea
        className="w-full md:w-3/4 p-2 mb-2 md:mb-0 rounded-lg resize-none shadow-inner border-none focus:ring-2 focus:ring-primary focus:outline-none text-gray-700"
        placeholder="Write a comment ..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-primary text-white w-full md:w-auto px-6 py-2 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Post Comment
      </button>
    </form>
  );
};

PostComment.propTypes = {
  onNewComment: PropTypes.func.isRequired,
};

export default PostComment;
