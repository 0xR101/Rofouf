<<<<<<< HEAD
import { FaBars } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import "./navSytle.css";
=======
import { useState } from "react";
import DropdownMenu from "../dropdown/dropDown";
>>>>>>> 120ca83eb4821b16d7313d16641da9bc7afcacab

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
      <nav style={{width: "100%"}} className="flex justify-between mx-4">
        {" "}
        {/* Removed padding and reduced margin */}
        <div className="flex flex-grow items-center gap-4">
          <a href="/" className="shrink-0 px-0">
            <img src="src\assets\logo.svg" alt="Logo" className="h-8" />{" "}
            {/* Adjusted logo size */}
          </a>
          <div className="flex-grow max-w-lg   ">
            <input
              type="search"
              className="w-full h-10 placeholder-Placeholder placeholder-bold   pl-4 pr-3 rounded-full bg-plaster shadow-md border-none resize-none focus:outline-none text-gray-700" // Adjusted height and padding
              placeholder="Search Books..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
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
            {isProfileListVisible ? <DropdownMenu names = {["login", "profile"]}/> : null}
          </div>
<<<<<<< HEAD

          <div className="flex gap-2 items-center mr-3 ">
            <button id="postOfferButton" className="shadow-xl">
              <img src="\src\assets\add.svg" width="40" height="40" alt="" />
              <div id="postOfferButtonText">Post Offer</div>
            </button>
            <a href="/chat" id="notficaitonButton">
              <img src="\src\assets\notficaiton.svg" alt="" />
            </a>
            <a href="">
              <div className="avatar">
                <img src="\src\assets\profile.svg" alt="" />
              </div>
            </a>
            <button id="showbutton" onClick={{}}>
              <a
                href="
              "
              >
                <IoHomeSharp />
              </a>
            </button>
          </div>
        </nav>
      </header>
    </>
=======
        </div>
      </nav>
    </header>
>>>>>>> 120ca83eb4821b16d7313d16641da9bc7afcacab
  );
}

export default NavBar;
