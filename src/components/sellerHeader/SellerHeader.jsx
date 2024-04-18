function SellerHeader() {
  return (
    <header className="bg-lightBrown50 rounded-xl shadow-md flex justify-between items-center">
      {/* Left side with avatar, name, and rating */}
      <div className="flex items-center space-x-4">
        <img
          src="src\assets\profile.png"
          alt="Ahmad Al-ali"
          className="w-16 h-16 p-4 rounded-full border-2 border-white" // Adjust size as needed
        />

        <div>
          <h2 className="text-3xl text-primary fount-bold font-semibold p-0 m-0">
            Ahmad Al-ali
          </h2>
          <p className="text-sm p-0 m-0 ">joined in 2024</p>
          {/* Placeholder for the stars */}
          <div className="flex">
            {/* Assuming you have a utility or component to render stars */}
            {/* <StarRating rating={4} /> */}
          </div>
        </div>
      </div>

      {/* Right side with "Start Chat" button */}
      <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-md">
        Start Chat
      </button>
    </header>
  );
}

export default SellerHeader;
