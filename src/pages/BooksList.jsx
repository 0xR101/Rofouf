import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import BookDetails from "../components/bookDetails/BookDetails.jsx";
import { useState } from "react";

const books = [
  {
    id: 101,
    title: "Harry Potter and the Sorcerer's Stone",
    summary:
      "It’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
    status: "Rented by Me",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "12/01/2023",
    seller: "Rayyan Raza",
  },
  {
    id: 102,
    title: "The Great Gatsby",
    summary:
      "It’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
    status: "Bought by Me",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "12/01/2023",
    seller: "Rayyan Raza",
  },
  {
    id: 103,
    title: "To Kill a Mockingbird",
    summary:
      "It’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
    status: "Exchanged",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "12/01/2023",
    seller: "Rayyan Raza",
  },
  {
    id: 104,
    title: "Pride and Prejudice",
    summary:
      "It’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
    status: "Selled",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "12/01/2023",
    seller: "Rayyan Raza",
  },
  {
    id: 105,
    title: "The Catcher in the Rye",
    summary:
      "A controversial novel by J.D. Salinger, following the story of Holden Caulfield, a disenchanted teenager navigating through life and society.",
    status: "Rented by Me",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "01/15/2023",
    seller: "Jane Smith",
  },
  {
    id: 106,
    title: "1984",
    summary:
      "A dystopian novel by George Orwell, depicting a totalitarian society where Big Brother watches everyone's every move.",
    status: "Bought by Me",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "02/28/2023",
    seller: "John Doe",
  },
];

export default function BooksList() {
  const [booksShown, setBooksShown] = useState(
    books.map((book) => {
      return (
        <BookDetails
          bookId={book.id}
          bookTitle={book.title}
          bookImageUrl={book.imageUrl}
          bookDetails={book.summary}
          bookDate={book.date}
          bookSeller={book.seller}
        />
      );
    })
  );

  const getFilteredBooks = (status = "all") => {
    if (status === "all") {
      setBooksShown(
        books.map((book) => {
          return (
            <BookDetails
              bookId={book.id}
              bookTitle={book.title}
              bookImageUrl={book.imageUrl}
              bookDetails={book.summary}
              bookDate={book.date}
              bookSeller={book.seller}
            />
          );
        })
      );
    } else {
      setBooksShown(
        books.map((book) => {
          if (book.status === status) {
            return (
              <BookDetails
                bookId={book.id}
                bookTitle={book.title}
                bookImageUrl={book.imageUrl}
                bookDetails={book.summary}
                bookDate={book.date}
                bookSeller={book.seller}
              />
            );
          }
        })
      );
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div class="p-12 bg-backGround">
        <h1 class="inline">All Books list </h1>

        <select
          id="filterBooks"
          onChange={(event) => {
            console.log(event.target.value);
            getFilteredBooks(event.target.value);
          }}
          class="p-3 w-22 bg-primary rounded-md text-white"
        >
          <option value="all">All</option>
          <option value="Bought">Bought</option>
          <option value="Exchanged">Exchanged</option>
          <option value="Selled">Selled</option>
        </select>

        {booksShown}
      </div>
      <Footer></Footer>
    </>
  );
}
