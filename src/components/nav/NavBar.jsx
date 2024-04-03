import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./navSytle.css";
function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <nav>
        <a href="" id="logo">
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
            <a className="option" href="">
              home
            </a>
            <a className="option" href="">
              Commmunity
            </a>
            <p className="option">Genres</p>

            <button id="closeButton" onClick={showNavbar}>
              <FaTimes />
            </button>
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
          <a href="" id="notficaitonButton">
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
