import PropTypes from "prop-types";

function BookItem({ status, title, picture, link }) {
  return (
    <div className="flex flex-col items-center relative p-5 ">
      <a href={link} className="block group no-underline">
        <div className="relative  w-48 h-72">
          <img
            src={picture}
            alt={title}
            className="object-cover object-center w-full h-full rounded-xl shadow-lg transition-opacity duration-300 ease-in-out group-hover:opacity-75"
          />
          <div className="absolute h-10 bottom-0 left-0 right-0 bg-gray-700 bg-opacity-50 text-white text-sm flex items-center justify-center font-bold rounded-b-xl">
            {status}
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className=" m-0 p-0 text-lg font-bold text-fontColorDarkBlue text-black no-underline">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
}

BookItem.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BookItem;
