import NavBar from "./../components/nav/NavBar.jsx";
import PersonChatCard from "./../components/personChatCard/PersonChatCard.jsx";

function Chat() {
  return (
    <>
      <NavBar></NavBar>

      <div className="flex flex-row w-full min-h-screen h-full bg-backGround p-5 gap-2">
        <div className="flex flex-col w-70 h-full  bg-primary  p-3 rounded-xl items-center  gap-10  flex-grow-2">
          <div className="text-xl font-semibold">conversiton</div>
          <div className="flex flex-col gap-3">
            <PersonChatCard />
            <PersonChatCard />
            <PersonChatCard />
            <PersonChatCard />
          </div>
        </div>

        <div className="w-90 flex flex-col flex-grow-2  w-full">
          <div
            style={{
              borderBottom: "1px solid gray",
            }}
            className="h-20 py-2 px-6"
          >
            <div className="flex gap-2">
              <img
                className="w-20 h-20 rounded-full"
                src="\src\assets\person.png"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <div className="text-black text-xl font-bold">Name</div>
                <div className="text-black text-opacity-40 line-clamp-1">
                  now
                </div>
              </div>
            </div>
          </div>
          {/* the above div only for person bar or card */}

          {/* this div for the messages */}
          <div className="flex flex-col">
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
            <h1>chat</h1>
          </div>

          <div className="relative flex items-center gap-2 border rounded-md bg-white">
            <span className="left-0 pl-3">
              {/* <svg

                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="\src\assets\attachment.svg"></path>
              </svg> */}

              <img src="\src\assets\attachment.svg" alt="" />
            </span>

            <input
              type="text"
              className="border p-2 pl-10 placeholder-gray-800 text-gray-900 relative w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter text"
            />

            <span className="right-0 pr-3">
              {/* <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg> */}
              <img src="\src\assets\send.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
