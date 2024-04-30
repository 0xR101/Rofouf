import PropTypes from "prop-types";
import "./../HorizontalBookSlider/style.css";

function BookItem({ status, title, picture, link, active }) {
  const tagClass = active
    ? "text-green-600 bg-green-200 bg-opacity-75"
    : "text-gray-600 bg-gray-200 bg-opacity-75";

  return (
    <div className="flex flex-col items-center relative p-5 ">
      <a href={link} className="block group no-underline">
        <div className="relative w-48 h-72">
          {active !== undefined && ( // Only render the tag if active prop is provided
            <div
              className={`absolute top-0 right-0 m-2 py-1 px-3 text-xs font-bold rounded-full ${tagClass}`}
            >
              {active ? "Active" : "Expired"}
            </div>
          )}
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
          <h3 className="m-0 p-0 text-lg font-bold text-primary text-black no-underline">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
}

BookItem.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool, // active is not required, so it does not need .isRequired
};

export default BookItem;
