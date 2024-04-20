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
    active: true,
  },
  {
    name: "1984",
    status: "For Rent",
    title: "1984",
    picture: "src/assets/bookCover.jpg",
    link: "/1984",
    active: false,
  },
  {
    name: "The Great Gatsby",
    status: "For Sale",
    title: "The Great Gatsby",
    picture: "src/assets/bookCover.jpg",
    link: "/great-gatsby",
    active: true,
  },
  {
    name: "Pride and Prejudice",
    status: "For Exshange",
    title: "Pride and Prejudice",
    picture: "src/assets/bookCover.jpg",
    link: "/pride-and-prejudice",
    active: true,
  },
  {
    name: "The Catcher in the Rye",
    status: "For Rent",
    title: "The Catcher in the Rye",
    picture: "src/assets/bookCover.jpg",
    link: "/the-catcher-in-the-rye",
    active: true,
  },
  {
    name: "The Hobbit",
    status: "For Sale",
    title: "The Hobbit",
    picture: "src/assets/bookCover.jpg",
    link: "/the-hobbit",
    active: false,
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
        breakpoint: 1079,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sortedBooks = books.sort((a, b) => b.active - a.active);

  return (
    <Slider className="bg-lightBrown50 rounded-xl shadow-md   " {...settings}>
      {sortedBooks.map((book, index) => (
        <BookItem key={index} {...book} />
      ))}
    </Slider>
  );
}

export default HorizontalBookSlider;
