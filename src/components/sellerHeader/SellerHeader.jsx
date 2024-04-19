import PropTypes from "prop-types";
import StarRating from "./../StarRating/StarRating.jsx";

function SellerHeader({ seller: { id, name, joinDate, rating, profilePic } }) {
  const handleChatClick = () => {
    // Placeholder for chat click handler, which you might replace with navigation logic
    console.log("Start chat with seller ID:", id);
  };

  return (
    <header className="bg-lightBrown50 rounded-xl shadow-md flex justify-between items-center ">
      <div className="flex items-center space-x-4">
        <img
          src={profilePic}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full border-2 border-white p-5"
        />
        <div>
          <h2 className="text-3xl text-primary font-bold font-semibold m-0">
            {name}
          </h2>
          <p className="text-sm pt-0 pb-2 m-0">joined in {joinDate}</p>
          <StarRating rating={rating} />
        </div>

        <div className="self-start m-0 pl-5 pt-5">
          <img className="  " src="\src\assets\loc.svg" alt="" />
          <p className="text-sm pt-0 pb-2 m-0">joined in {joinDate}</p>
        </div>
      </div>

      <button
        className="bg-primary text-white px-4 py-2 rounded-lg shadow-md"
        onClick={handleChatClick}
      >
        Start Chat
      </button>
    </header>
  );
}

SellerHeader.propTypes = {
  seller: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    profilePic: PropTypes.string.isRequired,
  }).isRequired,
};

export default SellerHeader;
