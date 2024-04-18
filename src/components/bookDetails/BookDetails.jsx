export default function BookDetails({
  bookTitle = "",
  bookId,
  bookAuthor = "",
  bookImageUrl = "",
  bookStatus = "",
  bookDetails = "",
  bookDate = "",
  bookSeller = ""
}) {
  return (
    <>
      <div id={bookId} class="p-4">
        <div class="bg-primary md:h-36 pl-8 pt-12 pb-12 flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
            <img src={bookImageUrl} class="w-32 rounded-md" />
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <div class="flex ">
              <div class="text-white w-full">
                <span class=" text-1xl title-font font-bold mb-2">
                  {bookTitle}
                </span>
                <br />
                <span>{bookDate}</span>
                <br/>
                <br/>
                <span>{bookSeller}</span>
              </div>
              <div class="leading-relaxed text-white text-lg ml-5 mr-5">{bookDetails}</div>
            </div>
            {/* This is for status */}
            <div class="w-full  md:w-1/2 flex space-x-3">
              <div class="w-1/3 bg-bookStatus flex justify-center items-center h-8 mt-5 rounded-xl  text-primary">
                Title
              </div>
              <div class="w-1/3 bg-bookStatus flex justify-center items-center h-8 mt-5 rounded-xl text-primary">
                Title
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
