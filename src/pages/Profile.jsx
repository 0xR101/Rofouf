import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import LeftSideProfile from "../components/Profile/LeftSideProfile.jsx";
import RightSideProfile from "../components/Profile/RightSideProfile.jsx";
export default function Profile() {
  let user = {
    name: "John Doe",
    mail: "johndoe@example.com",
    number: "1234567890",
    address: "123 Main Street",
    id: "jone.doe"
  };
  return (
    <>
      <NavBar></NavBar>
      <div class="flex">
        <LeftSideProfile userName={user.name} userMail={user.mail} userNumber={user.number} userAddress={user.address} userId={user.id} />
        <RightSideProfile />
      </div>

      <Footer></Footer>
    </>
  );
}
