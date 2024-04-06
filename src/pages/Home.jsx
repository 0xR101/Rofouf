import NavBar from "./components/nav/NavBar";



import Ad from "./components/ad/Ad.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React from "react";
import GroupSlider from "./components/slider/slider.jsx";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div
        style={{
          padding: "10px",
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
          }}
        >
          <GroupSlider />
        </div>
        <h1>Recommendations</h1>
      </div>
    </>
  );
}

export default Home;