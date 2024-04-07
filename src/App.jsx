import "./App.css";
import "./index.css";
import NavBar from "./components/nav/NavBar";
import Ad from "./components/ad/Ad.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React from "react";
import GroupSlider from "./components/slider/slider.jsx";
import BookCard from "./components/bookCard/BookCard.jsx";
import Footer from './components/footer/Footer.jsx';



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

        <div className="mt-5 bg-secondaryColor p-5 rounded-lg gap-2 relative z-0">
          <GroupSlider />
        </div>
        <h1>Recommendations</h1>
        <div className="grid   gap-3 md:grid-cols-2 sm:grid-cols-1">
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
        </div>
      </div>

      <Footer></Footer>


    </>
  );
}

export default App;
