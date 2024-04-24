import { useState } from "react";
import DropdownMenu from "../dropdown/DropDownMenu";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isProfileListVisible, setProfileListVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleProfileListEnter = () => setProfileListVisible(true);
  const handleProfileListLeave = () => setProfileListVisible(false);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?search=${searchTerm}`);
    }
  };

  const handlePostOfferClick = () => {
    navigate("/newOffer");
  };

  return (
    <header className="bg-primary text-white">
      <nav
        style={{ width: "100%" }}
        className="flex justify-between mx-4 gap-2 shadow-2xl"
      >
        <div className="flex flex-grow items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:mt-2">
          <a href="/" className="shrink-0 px-0">
            <img src="src/assets/logo.svg" alt="Logo" className="h-8" />
          </a>
          <div className="flex-grow max-w-lg max-sm:w-full max-sm:m-2 ">
            <input
              type="search"
              className="w-full h-10 placeholder-Placeholder placeholder-bold pl-4 pr-3 rounded-full bg-plaster shadow-md border-none resize-none focus:outline-none text-gray-700"
              placeholder="Search Books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
            />
          </div>
        </div>
        <div className="flex items-center pr-4 gap-4 max-sm:mb-12">
          {" "}
          {/* Adjusted gap between icons */}
          <button
            className="flex items-center gap-2 h-10  p-2 rounded-full border-none  bg-plaster "
            onClick={handlePostOfferClick}
          >
            <img src="src\assets\add.svg" alt="Post Offer" className="h-8" />{" "}
            {/* Icon height */}
            <span className="hidden sm:block text-primary font-bold">
              Post Offer
            </span>
          </button>
          <a href="/Chat" className="p-2">
            <img
              src="src\assets\notficaiton.svg"
              alt="Notifications"
              className="h-8" // Icon height
            />
          </a>
          <div>
            <div
              className="avatar rounded-full"
              onClick={() => {
                if (!isProfileListVisible) {
                  handleProfileListEnter();
                } else {
                  handleProfileListLeave();
                }
              }}
            >
              <img
                src="src\assets\profile.png"
                alt="Profile"
                className="h-10 w-10 rounded-full" // Adjusted profile size and shape
              />
            </div>
            {isProfileListVisible ? (
              <DropdownMenu names={["login", "profile"]} />
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
