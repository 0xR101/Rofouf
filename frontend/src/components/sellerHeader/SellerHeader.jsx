import { useDebugValue, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import StarRating from "./../StarRating/StarRating.jsx";
import { useNavigate } from "react-router-dom";
import { projectIP } from "./../../constants/chat.jsx";

function SellerHeader({
  seller: { id, name, joinDate, rating, profilePic, location },
}) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("currentUser"));
    setUserData(newData);
  }, [localStorage.getItem("currentUser")]);

  const handleChatClick = () => {
    const url = "https://api.chatengine.io/chats/";

    const data = {
      title: "Chat with the seller",
      is_direct_chat: false,
    };

    const headers = {
      "Project-ID": projectIP,
      "User-Name": userData.username,
      "User-Secret": userData.password,
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Success:", responseData);

        const url = `https://api.chatengine.io/chats/${responseData.id}/people/`;

        const headers = {
          "Project-ID": projectIP,
          "User-Name": userData.username,
          "User-Secret": userData.password,
          "Content-Type": "application/json",
        };

        const data = {
          username: "ayed",
        };

        fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log("add user");
            navigate(
              `/Chat?user=${userData.username}&password=${userData.password}&username=${name}`
            );
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(id);
  };

  return (
    <header className="bg-lightBrown50 rounded-xl shadow-md flex flex-col items-center  sm:flex-row sm:justify-between">
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4 p-3 xxs:p-4 xs:p-5 s:px-5 s:py-4 sm:py-5">
        <img
          src={profilePic}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full border-2 border-white mb-3 sm:mb-0 sm:w-20 sm:h-20"
        />
        <div>
          <h2 className="text-lg xxs:text-xl xs:text-2xl sm:text-3xl text-primary font-bold font-semibold m-0">
            {name}
          </h2>
          <p className="text-xs xxs:text-sm sm:text-md text-primary text-opacity-80 my-1">
            joined in {joinDate}
          </p>
          <StarRating rating={rating} />
          <div className="flex items-center justify-center sm:justify-start mt-2 ">
            <img
              className="w-4 h-4 xxs:w-5 xxs:h-5"
              src="\src\assets\loc.svg"
              alt="Location"
            />
            <span className="text-xs xxs:text-sm sm:text-md text-primary text-opacity-80 ml-2">
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 xxs:p-4 xs:p-5 s:px-5 s:py-4 sm:py-5">
        <button
          className="   sm:mt-0 bg-secondaryBackground text-primary px-6 py-3 rounded-md border-none transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none hover:bg-primary hover:text-secondaryBackground"
          onClick={handleChatClick}
        >
          <span className="font-bold text-md sm:text-lg">Start Chat</span>
        </button>
      </div>

      {/* <div className="absolute w-full h-full bg-black z-20">

      </div> */}
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
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default SellerHeader;
