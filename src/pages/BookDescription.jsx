import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Comment from "./../components/Comment/Comment.jsx";





import { FaWhatsapp } from "react-icons/fa";

import { IoChatbubble } from "react-icons/io5";
import dropDown from './../components/dropdown/dropDown.jsx';

function BookDescription() {
  return (
    <>
      <NavBar></NavBar>

      <div className="flex flex-col p-7 gap-4">
        <div className="flex flex-row gap-10 max-md:flex-col  max-sm:flex-col max-sm:items-center">
          <div className="flex flex-col gap-2">
            {/* here we should add the cover of the book */}
            <div>
              <img
                className="object-cover w-80 h-70 "
                src="\src\assets\bookCover.jpg"
                alt="hi"
              />
            </div>
            <div className="bg-white p-4 flex flex-col gap-1">
              <div className="flex gap-3">
                <img
                  className="rounded-md"
                  src="\src\assets\profile.png"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <img src="src\assets\stars.png" alt="" />
                  <div className="text-primary text-opacity-60">4.3/5</div>
                </div>
              </div>
              <div className="text-primary">Seller Name </div>
              <div>
                <img src="\src\assets\loc.svg" alt="" />
                <div className="text-black">location</div>
              </div>
              <a target="_blank" href="https://wa.me/0553731017">
                <div
                  onClick={{}}
                  className="bg-primary font-extrabold text-center hover:bg-orange-400 h-10 pt-4 rounded-lg flex gap-2 justify-center"
                >
                  <div>Contact</div>
                  <FaWhatsapp className="w-5 h-5 text-green-300" />
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white flex flex-col p-7 text-primary">
            <h1>The book title</h1>
            <h3>discritpion</h3>
            <p className="text-primary">
              Outlive: The Science and Art of Longevity" is a book that explores
              the intersection of science and lifestyle in achieving a longer,
              healthier life. It offers insights into the latest research on
              aging and provides practical advice on diet, exercise, and mental
              well-being to enhance longevity and vitality.
            </p>
            <h3 className="span">Autours</h3>
            <div
              style={{
                border: "solid 1px #533737",
              }}
            ></div>

            <div className=" flex flex-row gap-20 max-md:flex-col max-sm:flex-col ">
              <div className="flex flex-col w-full gap-5 text-primary">
                <ol>
                  Gener
                  <li>health</li>
                  <li>Fitness</li>
                  <li>Self help </li>
                </ol>

                <div className=" w-full flex flex-row  justify-between items-center">
                  <div>Book condtion:</div>
                  <div>Good</div>
                </div>

                <div className=" w-full flex flex-row  justify-between items-center ">
                  <div>Listing style:</div>
                  <div>sell</div>
                </div>

                <div className=" w-full flex flex-row  justify-between items-center ">
                  <div>Price:</div>
                  <div>$ 34</div>
                </div>

                <div className=" w-full flex flex-row  justify-between items-center ">
                  <div>Number of pages:</div>
                  <div>212</div>
                </div>
              </div>

              <div className="flex flex-col">
                <h2>Additional details</h2>

                <div className="flex flex-col bg-primary bg-opacity-70 text-white p-5 gap-4 w-80 h-full">
                  <div>
                    <div className="font-bold">ISBN(s)</div>
                    <div>123432531-124334643</div>
                  </div>
                  <div>
                    <div className="font-bold">Listing Date</div>
                    <div>2023-07-13 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Comments</h2>
        <div className="bg-primary bg-opacity-30 rounded-md p-8 flex flex-col gap-5 ">
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </div>
        <div className="w-full ">
          <form className="w-full">
            <div className="relative">
              <img
                className="absolute top-0 left-0 w-9  h-8 p-4 rounded-full"
                src="src\assets\profile.png"
                alt=""
              />
            </div>
            <div className="relative">
              <div
                onClick={{}}
                className="text-white text-center pt-2 w-20 h-7 rounded-xl bg-primary font-bold absolute top-4 right-0 "
              >
                Send
              </div>
            </div>

            <div className="mr-20">
              <textarea
                className=" shadow-md border-none resize-none focus:outline-none   flex pt-4 h-10 text-white pl-20 bg-primary bg-opacity-40 rounded-lg w-full text-base"
                name=""
                id=""
                placeholder="Write a comment ..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>

      <>
        <Footer></Footer>
      </>
    </>
  );
}

export default BookDescription;
