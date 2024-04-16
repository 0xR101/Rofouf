// components/CommentsSection.jsx
import { useState } from "react";
import PostComment from "./../PostComment/PostComment.jsx";
import Comments from "./../Comments/Comments.jsx";
// Dummy data for initial comments
const initialComments = [
  {
    username: "Jane Doe",
    profilePic: "./src/assets/profile.png",
    date: "Apr 14, 2024",
    text: "Love this community! Everyone is so helpful.",
    rating: 5,
  },
  {
    username: "John Smith",
    profilePic: "./src/assets/profile.png",
    date: "Apr 13, 2024",
    text: "Had a fantastic experience with this seller.",
    rating: 4,
  },
  // Add more dummy data as needed
];

const CommentsSection = () => {
  const [comments, setComments] = useState(initialComments);

  // Function to handle new comment submission
  const handleNewComment = (text, rating) => {
    const newComment = {
      username: "New User", // Replace with current user's username
      profilePic: "https://via.placeholder.com/40", // Replace with current user's profile picture
      date: new Date().toLocaleString("en-US"), // Current date and time
      text: text,
      rating: rating,
    };
    setComments([...comments, newComment]); // Add the new comment to the existing list
  };

  return (
    <div className="  my-4 p-4 space-y-8 bg-lightBrown50 rounded-xl">
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <Comments key={index} {...comment} />
        ))}
      </div>
      <PostComment onNewComment={handleNewComment} />
    </div>
  );
};

export default CommentsSection;
