import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import BookItem from "../components/BookItem/BookItem.jsx";
import BookDetails from "../components/bookDetails/BookDetails.jsx";

const books = [
  {
    id: 101,
    title: "Harry Potter and the Sorcerer's Stone",
    summary:
      "it’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
    status: "Rented by Me",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "12/01/2023",
    seller: "Rayyan Raza"
  },
  {
    id: 102,
    title: "The Great Gatsby",
    summary:
      "it’s a passion for knowledge, a desire to travel, and a fascination with culture that provides the driving force behind Assouline.",
    status: "Bought by Me",
    imageUrl:
      "https://i.pinimg.com/originals/16/b7/88/16b788f1c01374f26f6388d00f2ddd83.jpg",
    date: "12/01/2023",
    seller: "Rayyan Raza"

  },
];
// bookName="",
// bookAuthor="",
// bookImageUrl="",
// bookStatus="",
// BookDetails="",
export default function BooksList() {
  return (
    <>
      <NavBar></NavBar>
      <div class="p-12 bg-backGround">
        <h1>All Books list</h1>
        {books.map((book) => {
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
        })}
      </div>
      <Footer></Footer>
    </>
  );
}
