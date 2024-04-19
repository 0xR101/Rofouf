function SellerHeader() {
  return (
    <header className="bg-lightBrown50 p-4 flex justify-between items-center">
      {/* Left side with avatar, name, and rating */}
      <div className="flex items-center space-x-4">
        <img
          src="src\assets\profile.png.jpg"
          alt="Ahmad Al-ali"
          className="w-16 h-16 rounded-full border-2 border-white" // Adjust size as needed
        />
        <div>
          <h2 className="text-xl font-semibold">Ahmad Al-ali</h2>
          <p className="text-sm">joined in 2024</p>
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
