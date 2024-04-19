import { FaBars } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { useState } from "react";
import DropdownMenu from "../dropdown/DropDownMenu";

function NavBar() {
  const [isProfileListVisible, setProfileListVisible] = useState(false);
  const handleProfileListEnter = () => {
    setProfileListVisible(true);
  };

  const handleProfileListLeave = () => {
    setProfileListVisible(false);
  };
  return (
    <header className="bg-primary text-white">
      <nav style={{ width: "100%" }} className="flex justify-between mx-4 gap-2">
        {" "}
        {/* Removed padding and reduced margin */}
        <div className="flex flex-grow items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:mt-2">
          <a href="/" className="shrink-0 px-0">
            <img src="src\assets\logo.svg" alt="Logo" className="h-8" />{" "}
            {/* Adjusted logo size */}
          </a>
          <div className="flex-grow max-w-lg  max-sm:w-full max-sm:m-2 ">
            <input
              type="search"
              className="w-full h-10 placeholder-Placeholder placeholder-bold   pl-4 pr-3 rounded-full bg-plaster shadow-md border-none resize-none focus:outline-none text-gray-700" // Adjusted height and padding
              placeholder="Search Books..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4 max-sm:mb-12">
          {" "}
          {/* Adjusted gap between icons */}
          <button className="flex items-center gap-2 h-10  p-2 rounded-full border-none  bg-plaster ">
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
