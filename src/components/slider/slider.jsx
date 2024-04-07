import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
import Slider from "react-slick";
import ActiveGroupCard from "./../activeGroupCard/ActiveGroupCard.jsx";

function GroupSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          // centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode:true,
          infinite: true,
          centerPadding: "2px",

        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container ">
        <Slider {...settings}>
          <ActiveGroupCard />
          <ActiveGroupCard />
          <ActiveGroupCard />
          <ActiveGroupCard />
        </Slider>
      </div>
    </>
  );
}

export default GroupSlider;
