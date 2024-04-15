import { FaBars } from "react-icons/fa";
import "./navSytle.css";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between mx-auto">
        <div className="flex w-full  items-center gap-4">
          <a href="/" id="logo">
            <img src="src\assets\logo.svg" alt="the logo is lost" />
          </a>

          <div className="w-3/4">
            <input type="text" className="w-full" placeholder="Search Books..." />
          </div>
        </div>

        <div className="flex gap-2 items-center mr-5 ">
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
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
