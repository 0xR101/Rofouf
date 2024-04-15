import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
import Slider from "react-slick";
import GenreCard from './../genre/GenreCard.jsx';



function GroupSlider() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    infinite: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          // infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,
          infinite: false,
          // centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
          // infinite: true,
          centerPadding: "2px",

        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container ">
        <Slider {...settings}>

        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
        </Slider>
      </div>
    </>
  );
}

export default GroupSlider;
