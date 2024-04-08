function PersonChatCard() {
  return (
    <>
      <div className="bg-gray-300 text-white  h-20 py-2 px-6 rounded-xl ">
        <div className="flex gap-2">
          <img
            className="w-20 h-20 rounded-full"
            src="\src\assets\person.png"
            alt=""
          />
          <div className="flex flex-col gap-5">
            <div className="text-black text-xl font-bold">Name</div>
            <div className="text-black text-opacity-40 line-clamp-1">
              the content of the last message
            </div>
          </div>

          <div className="flex  text-black text-opacity-40">now</div>
          
        </div>
      </div>
    </>
  );
}

export default PersonChatCard;
