import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import LeftSideProfile from "../components/Profile/LeftSideProfile.jsx";
import RightSideProfile from "../components/Profile/RightSideProfile.jsx";
export default function Profile() {
  // let user = {
  //   name: "John Doe",
  //   mail: "johndoe@example.com",
  //   number: "1234567890",
  //   address: "123 Main Street",
  //   id: "jone.doe",
  // };
  return (
    <>
      <NavBar></NavBar>
      <div className="flex min-h-screen ">
        <LeftSideProfile/>
        <RightSideProfile />
      </div>

      <Footer></Footer>
    </>
  );
}
