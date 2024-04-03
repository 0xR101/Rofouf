import "./App.css";
import NavBar from "./components/nav/NavBar";
import Ad from "./components/ad/Ad.jsx";
import ActiveGroupCard from "./components/activeGroupCard/ActiveGroupCard.jsx";

function App() {
  return (
    // this code will be replaced by routes for all pages, but for now we keep it like this
    <>
      <NavBar></NavBar>
      <div
        style={{
          padding: "10px",
        }}
      >
        <Ad></Ad>

        <h1>Active Groups</h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <ActiveGroupCard />
        </div>
      </div>

    </>
  );
}

export default App;
