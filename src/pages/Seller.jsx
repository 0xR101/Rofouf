import NavBar from "../components/nav/NavBar";
import Footer from "./../components/footer/Footer.jsx";
import CommentsSection from "../components/CommentSection/CommentSection.jsx";
import SellerHeader from "./../components/sellerHeader/SellerHeader.jsx";
import HorizontalBookSlider from "../components/HorizontalBookSlider/HorizontalBookSlider.jsx";
function Seller() {
  return (
    <div className=" flex bg-backGround flex-col min-h-screen w-full">
      <NavBar></NavBar>

      <main className=" flex-grow m-10 space-y-5 ">
        <SellerHeader></SellerHeader>

        <HorizontalBookSlider></HorizontalBookSlider>
        <h1 className="text-2xl font-bold mb-4 text-primary">All Comments</h1>
        <CommentsSection></CommentsSection>
      </main>

      <Footer> </Footer>
    </div>
  );
}

export default Seller;
