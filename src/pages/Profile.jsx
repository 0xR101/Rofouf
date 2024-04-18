import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import LeftSideProfile from "../components/Profile/LeftSideProfile.jsx";
import RightSideProfile from "../components/Profile/RightSideProfile.jsx";
export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <div style={{ display: "flex"}}>
        <LeftSideProfile/>
        <RightSideProfile/>
      </div>

      <Footer></Footer>
    </>
  );
}
