import PropTypes from "prop-types";

function BookItem({ name, status, title, picture, link }) {
  // Define the aspect ratio you want for the images
  const imageHeight = "h-64"; // This is an example height. Adjust as needed.
  const imageWidth = "w-48"; // This is half of the example height.

  const statusHight = "h-6";

  return (
    <div className={`relative m-2 ${imageHeight} ${imageWidth}`}>
      <a href={link} className="block h-full">
        <img
          src={picture}
          alt={title}
          className="object-cover object-center w-full h-full rounded-lg shadow-lg"
        />
        <div
          className={`absolute bottom-0 ${statusHight} ${imageWidth} bg-gray-700 bg-opacity-50 text-white text-sm  text-center rounded-b-lg`}
        >
          {status}
        </div>
      </a>
      <div className="text-center mt-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{name}</p>
      </div>
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
