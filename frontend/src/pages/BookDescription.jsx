import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import CommentSection from "./../components/CommentSection/CommentSection.jsx";

import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating/StarRating.jsx";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BookDescription() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/seller?");
    // Replace '/profile' with the actual profile route
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/books/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);

  return (
    <div>
      <NavBar></NavBar>

      <div className="flex flex-col  p-7 gap-4 min-h-screen mb-10">
        <div className="flex flex-row gap-10 max-md:flex-col  max-sm:flex-col max-sm:items-center max-lg:flex-col">
          <div className="flex flex-col gap-2">
            {/* here we should add the cover of the book */}
            <div>
              <img
                className="object-cover rounded-lg w-80 h-70 "
                src={loading ? "loading" : data.book.image}
                alt="hi"
              />
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col gap-1 shadow-2xl w">
              <div className="flex gap-3">
                <img
                  className="rounded-md"
                  src="\src\assets\profile.png"
                  alt=""
                  onClick={handleNavigation}
                />
                <div className="flex flex-col gap-1">
                  <StarRating rating={4.4} />
                </div>
              </div>
              <div className="text-primary" onClick={handleNavigation}>
                Seller Name : {loading ? "loading" : data.book.seller}
              </div>
              <div>
                <img src="\src\assets\loc.svg" alt="" />
                <div className="text-black">location</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg flex flex-col p-7 text-primary shadow-2xl w-full">
            <h1>{loading ? "loading" : data.book.title}</h1>
            <h3>discritpion</h3>
            <p className="text-primary">
              {loading ? "loading" : data.book.description}
            </p>
            <h3 className="span">
              Autours {loading ? "loading" : data.book.author}
            </h3>
            <div
              style={{
                border: "solid 1px #533737",
              }}
            ></div>

            <div className=" flex flex-row gap-20 max-md:flex-col max-sm:flex-col">
              <div className="flex flex-col w-full gap-5 text-primary">
                {loading
                  ? "loading"
                  : data.book.genre.map((gne) => {
                      return <li>{gne}</li>;
                    })}

                <div className=" w-full flex flex-row  justify-between items-center">
                  <div>Book condtion:</div>
                  <div>{loading?"loading":data.book.bookCondition}</div>
                </div>

                <div className=" w-full flex flex-row  justify-between items-center ">
                  <div>Listing style:</div>
                  <div>{loading?"loading":data.book.offerStatus}</div>
                </div>

                <div className=" w-full flex flex-row  justify-between items-center ">
                  <div>Price:</div>
                  <div>{loading?"loading":data.book.price} SAR</div>
                </div>

                <div className=" w-full flex flex-row  justify-between items-center ">
                  <div>Number of pages:</div>
                  <div>{loading?"loading":data.book.numberOfPages}</div>
                </div>
              </div>

              <div className="flex flex-col">
                <h2>Additional details</h2>

                <div className="flex  rounded-lg flex-col bg-primary bg-opacity-70 text-white p-5 gap-4 w-80 h-full">
                  <div>
                    <div className="font-bold">ISBN(s)</div>
                    <div>{loading?"loading":data.book.ISBN}</div>
                  </div>
                  <div>
                    <div className="font-bold">Listing Date</div>
                    <div>{loading?"loading":data.book.listingDate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Comments</h1>
        <CommentSection> </CommentSection>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default BookDescription;
