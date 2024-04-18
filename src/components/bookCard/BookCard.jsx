function BookCard() {
  return (
    <>
      <div className="flex flex-row w-full max-sm:flex-col max-sm:shadow-bottom-lg">
        <div className="w-60 h-80">
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="\src\assets\bookCover.jpg"
            alt="hi"
          />
          <div className="relative text-white bottom-14 rounded-b-2xl  p-4 font-bold bg-gray-400 h-5 bg-opacity-30">
            For Selling
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start justify-between p-4">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold text-fontColorDarkBlue line-clamp-1">
              I Want a Better Catastrophe
            </div>
            <div className="text-fontColorDarkBlue text-opacity-40 line-clamp-1">
              With global warming projected to rocket past
            </div>
            <div className="flex flex-row gap-10 text-lg">
              <div className="text-fontColorDarkBlue">$ 30.00</div>
              <div className="line-through text-fontColorDarkBlue text-opacity-40">
                $ 39.99
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-3">
              <div className=" text-lg text-fontColorDarkBlue">Condtion:</div>
              <div className="bg-green-500 text-white font-extrabold py-2 px-6 rounded shadow-2xl ">
                Good
              </div>
            </div>
            <a href="/bookDescription">
              <div className="bg-primary hover:bg-orange-400 text-white font-extrabold py-2 px-6 rounded shadow-2xl">
                Show Details
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCard;
