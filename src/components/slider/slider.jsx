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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
