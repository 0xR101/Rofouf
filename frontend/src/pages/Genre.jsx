import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/nav/NavBar.jsx";
import Footer from "../components/footer/Footer.jsx";
import BookListing from "../components/bookListing/BookListing.jsx";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function BooksByGenre() {
  const [booksShown, setBooksShown] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOfferTypes, setSelectedOfferTypes] = useState([]);
  const [sortMethod, setSortMethod] = useState("");
  const query = useQuery();
  const genreQuery = query.get("genre") || ""; // Assume 'genre' is passed as the genre's value

  useEffect(() => {
    if (genreQuery) {
      setLoading(true);
      const queryParams = new URLSearchParams({
        genre: genreQuery,
        sort: sortMethod,
        offerType: selectedOfferTypes.join(","),
      }).toString();

      fetch(`http://localhost:5000/api/v1/books?${queryParams}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data);
          const bookComponents = data.data.books.map((book) => (
            <BookListing
              key={book._id}
              bookId={book._id}
              bookTitle={book.title}
              bookImageUrl={book.image}
              bookSummary={book.description}
              bookOfferType={book.offerType}
              bookSeller={book.seller}
              bookPrice={book.price}
              bookCondition={book.bookCondition}
              bookDate={book.listingDate}
              bookAvailable={book.offerStatus.toLowerCase() === "active"} // Adjust as needed
              bookAuthor={book.author}
            />
          ));
          setBooksShown(bookComponents);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch books:", error);
          setLoading(false);
        });
    }
  }, [genreQuery, selectedOfferTypes, sortMethod]);

  const handleSortChange = (event) => {
    setSortMethod(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOfferTypes((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((type) => type !== value);
      }
    });
  };
  return (
    <>
      <NavBar />
      <div className="p-12 min-h-screen mb-10">
        {!genreQuery ? (
          <h1>Genre not found. Please select from available genres.</h1>
        ) : (
          <>
            <h1 className="inline">
              Books in "{genreQuery}" Genre ({booksShown.length})
            </h1>
            <div>
              <label>Sort by:</label>
              <select
                onChange={handleSortChange}
                className="p-2 bg-primary rounded-md text-white ml-4"
              >
                <option value="">Select</option>
                <option value="priceAsc">Price (Low to High)</option>
                <option value="priceDesc">Price (High to Low)</option>
                <option value="dateAsc">Date (Oldest to Newest)</option>
                <option value="dateDesc">Date (Newest to Oldest)</option>
              </select>
            </div>
            <div>
              Filter by Status:
              <label>
                <input
                  type="checkbox"
                  value="forRent"
                  label="For Rent"
                  onChange={handleCheckboxChange}
                />{" "}
                For Rent
              </label>
              <label>
                <input
                  type="checkbox"
                  value="forSale"
                  label="For Sale"
                  onChange={handleCheckboxChange}
                />{" "}
                For Sale
              </label>
              <label>
                <input
                  type="checkbox"
                  value="forExchange"
                  label="For Exchange"
                  onChange={handleCheckboxChange}
                />{" "}
                For Exchange
              </label>
            </div>
            {loading ? (
              <p>Loading books...</p>
            ) : (
              <div>
                {booksShown.length > 0 ? (
                  booksShown
                ) : (
                  <p>No books found in the "{genreQuery}" genre.</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
