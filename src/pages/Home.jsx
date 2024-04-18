import NavBar from "./../components/nav/NavBar.jsx";
import Ad from "./../components/ad/Ad.jsx";
import GroupSlider from "./../components/slider/slider.jsx";
import BookCard from "./../components/bookCard/BookCard.jsx";
import Footer from "./../components/footer/Footer.jsx";

const books = [
  {
    title: "1984",
    subtitle: "A Novel by George Orwell",
    offerType: "Selling",
    condition: "Good",
    newPrice: "$9.99",
    oldPrice: "$12.99",
    image:"https://i.guim.co.uk/img/media/f51df963039740fa2cb5f1b6649e571a0d31579e/0_0_1355_2079/master/1355.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=0166526b8d4f5d40300085c26a427cea"
  },
  {
    title: "To Kill a Mockingbird",
    subtitle: "A Novel by Harper Lee",
    offerType: "Borrowing",
    condition: "Good",
    newPrice: "$11.50",
    oldPrice: "$14.99",
    image:"https://m.media-amazon.com/images/I/91TCHkU6UrL._SY466_.jpg"
  },
  {
    title: "The Hobbit",
    subtitle: "A Novel by J.R.R. Tolkien",
    offerType: "Swap",
    condition: "Poor",
    newPrice: "$8.00",
    oldPrice: "$10.99",
    image:"https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium"
  },
  
];

function Home() {
  return (
    // this code will be replaced by routes for all pages, but for now we keep it like this
    <>
      <NavBar></NavBar>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Ad></Ad>
        <h1>Genres</h1>

        <div className="mt-5 mb-5 p-4 rounded-lg gap-2 ">
          <GroupSlider />
        </div>

        <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
          <div className="flex-1 rounded-md bg-secondaryColor w-80 p-2 h-20 flex flex-col items-center justify-center text-primary shadow-2xl hover:bg-primary hover:text-white">
            <div className="font-bold">Most recent offers</div>
          </div>
          <div className="flex-1 rounded-md bg-secondaryColor w-80 p-2 h-20 flex flex-col items-center justify-center text-primary shadow-2xl hover:bg-primary hover:text-white">
            <div className="font-bold">Most recent offers</div>
          </div>
          <div className="flex-1 rounded-md bg-secondaryColor w-80 p-2 h-20 flex flex-col items-center justify-center text-primary shadow-2xl hover:bg-primary hover:text-white">
            <div className="font-bold">Most recent offers</div>
          </div>
        </div>
        <h1>Recommendations</h1>
        <div className="grid   gap-6 md:grid-cols-2 sm:grid-cols-1 max-sm:justify-center">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              subtitle={book.subtitle}
              offerType={book.offerType}
              condition={book.condition}
              newPrice={book.newPrice}
              oldPrice={book.oldPrice}
              image={book.image}
            />
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
