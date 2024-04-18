import BookItem from "./../BookItem/BookItem.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const books = [
  {
    name: "To Kill a Mockingbird",
    status: "Available",
    title: "To Kill a Mockingbird",
    picture:
      "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg",
    link: "/to-kill-a-mockingbird",
  },
  {
    name: "1984",
    status: "Sold Out",
    title: "1984",
    picture: "src/assets/bookCover.jpg",
    link: "/1984",
  },
  {
    name: "The Great Gatsby",
    status: "For Sale",
    title: "The Great Gatsby",
    picture: "src/assets/bookCover.jpg",
    link: "/great-gatsby",
  },
  {
    name: "Pride and Prejudice",
    status: "For Exshange",
    title: "Pride and Prejudice",
    picture: "src/assets/bookCover.jpg",
    link: "/pride-and-prejudice",
  },
  {
    name: "The Catcher in the Rye",
    status: "For Rent",
    title: "The Catcher in the Rye",
    picture: "src/assets/bookCover.jpg",
    link: "/the-catcher-in-the-rye",
  },
  {
    name: "The Hobbit",
    status: "For Sale",
    title: "The Hobbit",
    picture: "src/assets/bookCover.jpg",
    link: "/the-hobbit",
  },
];

function HorizontalBookSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider className="bg-lightBrown50 rounded-xl shadow-md   " {...settings}>
      {books.map((book, index) => (
        <BookItem key={index} {...book} />
      ))}
    </Slider>
  );
}

export default HorizontalBookSlider;
