import NavBar from "../components/nav/NavBar";
import Footer from "./../components/footer/Footer.jsx";
import CommentsSection from "../components/CommentSection/CommentSection.jsx";
import SellerHeader from "./../components/sellerHeader/SellerHeader.jsx";
import HorizontalBookSlider from "../components/HorizontalBookSlider/HorizontalBookSlider.jsx";

// Example seller data with an ID property
const sellerInfo = {
  id: 123, // Example seller ID
  name: "Ahmad Al-ali",
  joinDate: "2024",
  rating: 3.8,
  profilePic: "./src/assets/person.png", // Replace with actual image path
  location: "Amman, Jordan",
};

function Seller() {
  return (
    <div className=" flex  flex-col min-h-screen w-full">
      <NavBar></NavBar>

      <main className=" flex-grow m-10 space-y-5 mb-40 ">
        <SellerHeader seller={sellerInfo} />
        <h1 className="text-3xl font-bold mb-4 text-primary">All Offers</h1>
        <HorizontalBookSlider></HorizontalBookSlider>
        <h1 className="text-3xl font-bold mb-4 text-primary">All Comments</h1>
        <CommentsSection></CommentsSection>
      </main>

      <Footer> </Footer>
    </div>
  );
}

export default Seller;
