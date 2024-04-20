import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import OrderDetails from "./../components/OrderDetails/OrderDetails.jsx";
export default function NewOffer() {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <OrderDetails></OrderDetails>
      </div>
      <Footer></Footer>
    </>
  );
}
