import BookItem from "./../BookItem/BookItem.jsx";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const HorizontalBookSlider = ({ user = "" }) => {
  const [booksShown, setBooksShown] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setLoading(true);
    const queryParams = new URLSearchParams({
      seller: user,
      sort: "dateDesc",
    }).toString();

    fetch(`http://localhost:5000/api/v1/books?${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        const bookComponents = data.data.books.map((book) => (
          <BookItem
            key={book._id}
            bookId={book._id}
            bookTitle={book.title}
            bookImageUrl={book.image}
            bookOfferType={book.offerType}
            bookPrice={book.price}
            bookAvailable={book.offerStatus}
          />
        ));
        setBooksShown(bookComponents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch books:", error);
        setLoading(false);
      });
  }, [user]);

  return (
    <Slider className="bg-lightBrown50 rounded-xl shadow-md   " {...settings}>
      {booksShown}
    </Slider>
  );
};

export default HorizontalBookSlider;
