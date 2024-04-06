import "./App.css";
import "./index.css";
import NavBar from "./components/nav/NavBar";
import Ad from "./components/ad/Ad.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React from "react";
import GroupSlider from "./components/slider/slider.jsx";

function App() {
  return (
    // this code will be replaced by routes for all pages, but for now we keep it like this
    <>
      <NavBar></NavBar>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Ad></Ad>
        <h1>Active Groups</h1>

        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#cabdb3",
            padding: "20px",
            borderRadius: "10px",
            gap: "10px",
            position: "relative",
            zIndex: "0",
          }}
        >
          <GroupSlider />
        </div>
        <h1>Recommendations</h1>

        <div style={{ width: "300px", height: "400px" }}>
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="\src\assets\bookCover.jpg"
            alt="hi"
          />
          <div className="relative bottom-14 rounded-b-2xl  p-4 font-bold bg-gray-500 h-5 opacity-60 text-opacity-0">
            For Selling
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
