import NavBar from "../components/nav/NavBar";
import Footer from "./../components/footer/Footer.jsx";
import CommentsSection from "../components/CommentSection/CommentSection.jsx";

function Seller() {
  return (
    <>
      <NavBar></NavBar>
      <div
        className="bg-backGround "
        style={{
          padding: "50px",
        }}
      >
        <h1 className="text-2xl font-bold mb-4 text-primary">Comments</h1>
        <CommentsSection></CommentsSection>
      </div>
      <Footer> </Footer>
    </>
  );
}

export default Seller;
