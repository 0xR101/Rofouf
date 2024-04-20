import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import OrderDetails from "./../components/OrderDetails/OrderDetails.jsx";
export default function NewOffer() {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1>Create new offer </h1>
        <OrderDetails></OrderDetails>
      </div>
      <Footer></Footer>
    </>
  );
}
