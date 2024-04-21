import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GiSwordInStone } from "react-icons/gi";
// import React from "react";
import Slider from "react-slick";
import GenreCard from "./../genre/GenreCard.jsx";
import { IoIosColorWand } from "react-icons/io";
import { FaChildReaching } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineComputer } from "react-icons/md";
import { GiMeat } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { MdSportsVolleyball } from "react-icons/md";
import { GiGardeningShears } from "react-icons/gi";

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
          dots: false,
          // infinite: true,
          centerPadding: "2px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          // infinite: true,
          centerPadding: "2px",
        },
      },
      {
        breakpoint: 365,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
          <GenreCard name="History">
            <GiSwordInStone className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Arts">
            <IoIosColorWand className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Children">
            <FaChildReaching className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Biographies">
            <ImProfile className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Business">
            <TbBusinessplan className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Computer">
            <MdOutlineComputer className="w-8 h-8" />
          </GenreCard>
          <GenreCard name="Food & cock">
            <GiMeat className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Education">
            <MdCastForEducation className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Health">
            <RiMentalHealthFill className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Sport">
            <MdSportsVolleyball className="w-8 h-8" />
          </GenreCard>

          <GenreCard name="Home">
            <GiGardeningShears className="w-8 h-8" />
          </GenreCard>
        </Slider>
      </div>
    </>
  );
}

export default GroupSlider;
