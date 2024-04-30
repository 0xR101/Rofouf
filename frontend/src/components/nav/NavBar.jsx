import { useRef, useState } from "react";
import DropdownMenu from "../dropdown/DropDownMenu";
import { useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

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

  // function toggleDialog() {
  //   if (!dialogRef.current) {
  //     return;
  //   }

  //   dialogRef.current.hasAttribute("open")
  //     ? dialogRef.current.close()
  //     : dialogRef.current.showModal();
  // }

  // const dialogRef = useRef(null);

  return (
    <div className="flex flex-col gap-2 mb-2">
      <header className="bg-primary text-white">
        <nav
          style={{ width: "100%" }}
          className="flex justify-between mx-4 gap-2 "
        >
          <div className="flex flex-grow items-center gap-4 ">
            <a href="/" className="shrink-0 px-0">
              <img src="src/assets/logo.svg" alt="Logo" className="h-8" />
            </a>

            <div className="flex-grow max-w-lg  relative max-sm:hidden">
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
          <div className="flex items-center pr-4 gap-4 ">
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
        {/* <dialog
          ref={dialogRef}
          className="w-screen h-full fixed top-0 bg-white bg-opacity-60 border-0 rounded-md "
        >
          <div className="flex justify-end">
            <VscClose className="w-6 h-6 mb-4" onClick={toggleDialog} />
          </div>

          <div className="flex-grow max-w-lg shadow-2xl  relative ">
            <input
              type="search"
              className="w-full h-10 placeholder-Placeholder placeholder-bold pl-4 pr-3 rounded-full bg-white shadow-2xl  border-none resize-none focus:outline-none text-gray-700"
              placeholder="Search Books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
            />
          </div>
        </dialog> */}
      </header>
      <div className="pr-6">
        <div className="flex-grow mx-1 shadow-2xl hidden max-sm:block w-full">
          <input
            type="search"
            className="w-full h-10 placeholder-Placeholder placeholder-bold pl-4 pr-3  rounded-full bg-white shadow-2xl  border-none resize-none focus:outline-none text-gray-700"
            placeholder="Search Books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
