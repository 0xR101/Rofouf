import { useState, useEffect } from "react";
import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import BookListing from "../components/bookListing/BookListing.jsx";

export default function RecentOffers() {
  const [booksShown, setBooksShown] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const [sortMethod, setSortMethod] = useState("dateDesc"); // Default to most recent

  // Mock data - the array of books
  const books = [
    {
      key: 101,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      summary:
        "It’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
      status: "For Rent",
      imageUrl:
        "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
      seller: "Osama Abkar",
      genre: "children",
      price: "2.00 SAR per day",
      location: "Daharan",
      offerDate: new Date(2024, 4, 20, 10, 33, 30),
      available: true,
    },
    {
      key: 102,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      summary:
        "It’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
      status: "For Sale",
      imageUrl:
        "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
      seller: "Rayyan Raza",
      genre: "history",
      price: "55.00 SAR",
      location: "Riyadh",
      offerDate: new Date(2024, 4, 20, 15, 33, 30),
      available: true,
    },
    {
      key: 103,
      title: "A History of the American People",
      author: "Paul Johnson",
      summary:
        "Littered with letters, diaries, and recorded conversations, it details the origins of their struggles for independence and nationhood, their heroic efforts and sacrifices to deal with the 'organic sin' of slavery and the preservation of the Union to its explosive economic growth and emergence as a world power.",
      status: "For Exchange",
      imageUrl:
        "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
      seller: "Alawi Sahel",
      genre: "history",
      price: "Harry Potter Book",
      location: "Riyadh",
      offerDate: new Date(2024, 4, 21, 15, 33, 30),
      available: true,
    },
    {
      key: 104,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      summary:
        "Rich Dad, Poor Dad by Robert T. Kiyosaki is a personal finance book that emphasizes the importance of financial education, teaches how to make money work for you, and challenges traditional beliefs about money.",
      status: "For Sale",
      imageUrl:
        "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
      seller: "Rayyan Raza",
      genre: "Biography",
      price: "60.00 SAR",
      location: "Jizan",
      offerDate: new Date(2024, 4, 21, 15, 33, 30),
      available: true,
    },
  ];
  const maxBooksToShow = 10; // Limit to the top 10 recent offers

  useEffect(() => {
    let filteredBooks = books.filter(
      (book) =>
        book.available &&
        (filterStatus.length === 0 || filterStatus.includes(book.status))
    );

    switch (sortMethod) {
      case "priceAsc":
        filteredBooks = filteredBooks.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "priceDesc":
        filteredBooks = filteredBooks.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "dateAsc":
        filteredBooks = filteredBooks.sort((a, b) => a.offerDate - b.offerDate);
        break;
      case "dateDesc":
        filteredBooks = filteredBooks.sort((a, b) => b.offerDate - a.offerDate);
        break;
    }

    filteredBooks = filteredBooks.slice(0, maxBooksToShow); // Only take the top N books

    const bookComponents = filteredBooks.map((book) => (
      <BookListing
        key={book.key}
        bookId={book.key}
        bookTitle={book.title}
        bookImageUrl={book.imageUrl}
        bookSummary={book.summary}
        bookStatus={book.status}
        bookSeller={book.seller}
        bookGenre={book.genre}
        bookPrice={book.price}
        bookLocation={book.location}
        bookDate={book.offerDate}
        bookAvailable={book.available}
        bookAuthor={book.author}
      />
    ));
    setBooksShown(bookComponents);
  }, [filterStatus, sortMethod]);

  const handleFilterChange = (event) => {
    const status = event.target.value;
    if (event.target.checked) {
      setFilterStatus([...filterStatus, status]);
    } else {
      setFilterStatus(filterStatus.filter((s) => s !== status));
    }
  };

  const handleSortChange = (event) => {
    setSortMethod(event.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="p-12 bg-backGround">
        <h1 className="inline">Recent Offers ({booksShown.length})</h1>
        <br />
        <div>
          <label>Sort by:</label>
          <select
            onChange={handleSortChange}
            className="p-2 bg-primary rounded-md text-white ml-4"
          >
            <option value="dateDesc">Date (Newest to Oldest)</option>
            <option value="dateAsc">Date (Oldest to Newest)</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
          </select>
        </div>
        <div>
          Filter by Status:
          <label>
            <input
              type="checkbox"
              value="For Rent"
              onChange={handleFilterChange}
            />{" "}
            For Rent
          </label>
          <label>
            <input
              type="checkbox"
              value="For Sale"
              onChange={handleFilterChange}
            />{" "}
            For Sale
          </label>
          <label>
            <input
              type="checkbox"
              value="For Exchange"
              onChange={handleFilterChange}
            />{" "}
            For Exchange
          </label>
        </div>

        {booksShown}
      </div>
      <Footer />
    </>
  );
}