import PropTypes from "prop-types";
import StarRating from "./../StarRating/StarRating.jsx";
import { useNavigate } from "react-router-dom";

function SellerHeader({
  seller: { id, name, joinDate, rating, profilePic, location },
}) {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/chat");
    console.log(id);
  };

  return (
    <header className="bg-lightBrown50 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center p-5">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <img
          src={profilePic}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full border-2 border-white"
        />
        <div>
          <h2 className="text-xl sm:text-3xl text-primary font-bold font-semibold m-0">
            {name}
          </h2>
          <p className="text-sm text-primary text-opacity-80 pt-0 pb-2 m-0">
            joined in {joinDate}
          </p>
          <div className="flex items-center">
            <StarRating rating={rating} />
            <div className="flex items-center pl-2">
              <img
                className="w-4 h-4 sm:w-5 sm:h-5"
                src="\src\assets\loc.svg"
                alt="Location"
              />
              <span className="text-sm text-primary text-opacity-80 pl-1">
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          className="bg-secondaryBackground text-primary px-6 py-3 rounded-md border-none transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none hover:bg-primary hover:text-secondaryBackground"
          onClick={handleChatClick}
        >
          <span className="font-bold text-md sm:text-lg">Start Chat</span>
        </button>
      </div>
    </header>
  );
}

// PropTypes stay the same as before...

SellerHeader.propTypes = {
  seller: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    profilePic: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default SellerHeader;
