import BookItem from "./../BookItem/BookItem.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    status: "Sale",
    title: "The Great Gatsby",
    picture: "/path/to/great-gatsby.jpg",
    link: "/great-gatsby",
  },
  {
    name: "Pride and Prejudice",
    status: "New Arrival",
    title: "Pride and Prejudice",
    picture: "/path/to/pride-prejudice.jpg",
    link: "/pride-and-prejudice",
  },
  {
    name: "The Catcher in the Rye",
    status: "Limited Stock",
    title: "The Catcher in the Rye",
    picture: "/path/to/catcher-in-the-rye.jpg",
    link: "/the-catcher-in-the-rye",
  },
  {
    name: "The Hobbit",
    status: "On Sale",
    title: "The Hobbit",
    picture: "/path/to/the-hobbit.jpg",
    link: "/the-hobbit",
  },
];

function HorizontalBookSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider className="bg-lightBrown50 rounded m-4" {...settings}>
      {books.map((book, index) => (
        <BookItem key={index} {...book} />
      ))}
    </Slider>
  );
}

export default HorizontalBookSlider;
