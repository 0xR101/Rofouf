import { FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from "./../dropdown/dropDown.jsx";
import { useRef } from "react";
import { useState } from "react";
import "./navSytle.css";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <nav className="">
        <a href="/" id="logo">
          <img src="src\assets\logo.svg" alt="the logo is lost" />
        </a>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flex: "2",
            paddingLeft: "1%",
          }}
        >
          <input type="text" placeholder="Search Books..." />
          <div id="options" ref={navRef}>
            {/* <a className="option" href="/">
              home
            </a> */}
            {/* <a className="option" href="">
              Commmunity
            </a> */}
            {/* <div
              id="gen"
              className="option"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (!isDropdownVisible) {
                  handleMouseEnter();
                } else {
                  handleMouseLeave();
                }
              }}
            >
              genres
              {isDropdownVisible && <DropdownMenu />}
            </div> */}

            {/* <button id="closeButton" onClick={showNavbar}>
              <FaTimes />
            </button> */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px ",
            padding: "10px",
            margin: "5px",
            alignItems: "center",
          }}
        >
          <button id="postOfferButton">
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
          <button id="showbutton" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
