import React from "react";

const BookListing = ({
  bookTitle = "",
  bookId,
  bookAuthor = "",
  bookImageUrl = "",
  bookStatus = "",
  bookSummary = "",
  bookDate = null,
  bookSeller = "",
  bookGenre = "",
  bookPrice = "",
  bookLocation = "",
  bookAvailable = false,
}) => {
  // Format the date if it's not null
  const formattedDate = bookDate ? new Date(bookDate).toLocaleDateString() : "";

  return (
    <>
      <div id={bookId} className="p-4">
        <div className="bg-primary pl-8 pt-12 pb-12 flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
            <img src={bookImageUrl} className="w-32 rounded-md" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <div className="flex ">
              <div className="text-white w-full">
                <span className=" text-1xl title-font font-bold mb-2">
                  {bookTitle}
                </span>
                <br />
                <span>{bookAuthor}</span>
                <br />
                <br />
                <span>Posted on: {formattedDate}</span>
                <br />
                <span>Sold by: {bookSeller}</span>
              </div>
              <div className="leading-relaxed text-white text-lg ml-5 mr-5">
                {bookSummary}
              </div>
            </div>
            {/* This is for status */}
            <div className="w-full  md:w-1/2 flex space-x-3">
              <div className="bg-bookStatus flex justify-center items-center h-8 mt-5 rounded-xl text-primary inline-block px-2">
                {bookStatus}: {bookPrice}
              </div>
              <div className="bg-bookStatus flex justify-center items-center h-8 mt-5 rounded-xl text-primary inline-block px-2">
                Location: {bookLocation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookListing;
