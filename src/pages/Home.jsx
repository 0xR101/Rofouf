import NavBar from "./../components/nav/NavBar.jsx";
import Ad from "./../components/ad/Ad.jsx";
import GroupSlider from "./../components/slider/slider.jsx";
import BookCard from "./../components/bookCard/BookCard.jsx";
import Footer from "./../components/footer/Footer.jsx";

import { LuSword } from "react-icons/lu";
import GenreCard from "./../components/genre/GenreCard.jsx";

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
        <div className="grid   gap-3 md:grid-cols-2 sm:grid-cols-1">
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
