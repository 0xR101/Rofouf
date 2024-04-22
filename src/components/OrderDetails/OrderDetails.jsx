import { useState } from "react";
import Select from "react-select";
import { AiOutlineCalendar } from "react-icons/ai"; // Ensure you have react-icons installed

import { AiOutlineCamera } from "react-icons/ai";
import { useEffect } from "react";

const popularBookGenres = [
  // Fiction
  { value: "actionAdventure", label: "Action & Adventure" },
  { value: "classics", label: "Classics" },
  { value: "fantasy", label: "Fantasy" },
  { value: "historicalFiction", label: "Historical Fiction" },
  { value: "horror", label: "Horror" },
  { value: "literaryFiction", label: "Literary Fiction" },
  { value: "mysteryThriller", label: "Mystery & Thriller" },
  { value: "romance", label: "Romance" },
  { value: "scienceFiction", label: "Science Fiction" },
  { value: "shortStories", label: "Short Stories" },
  { value: "westerns", label: "Westerns" },
  { value: "youngAdult", label: "Young Adult" },

  // Nonfiction
  { value: "artsPhotography", label: "Arts & Photography" },
  { value: "biographyMemoir", label: "Biography & Memoir" },
  { value: "businessEconomics", label: "Business & Economics" },
  { value: "computersTechnology", label: "Computers & Technology" },
  { value: "cookingFoodWine", label: "Cooking, Food & Wine" },
  { value: "history", label: "History" },
  { value: "politicsSocialSciences", label: "Politics & Social Sciences" },
  { value: "reference", label: "Reference" },
  { value: "religionSpirituality", label: "Religion & Spirituality" },
  { value: "selfHelp", label: "Self-Help" },
  { value: "travel", label: "Travel" },

  // Other
  { value: "comicsGraphicNovels", label: "Comics & Graphic Novels" },
  { value: "childrensBooks", label: "Children's Books" },
  { value: "magazinesNewspapers", label: "Magazines & Newspapers" },
];

const orderTypeOptions = [
  { value: "sell", label: "Sell" },
  { value: "rent", label: "Rent" },
  { value: "exchange", label: "Exchange" },
];

const bookConditionOptions = [
  { value: "new", label: "New" },
  { value: "likeNew", label: "Like New" },
  { value: "veryGood", label: "Very Good" },
  { value: "good", label: "Good" },
  { value: "poor", label: "Poor" },
];

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "2.5rem", // Adjust height to match your other inputs
    borderRadius: "9999px", // Tailwind rounded-full
    backgroundColor: "#f4f4f4", // Tailwind bg-plaster or any color you want
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Tailwind shadow-md
    border: "none",
    paddingLeft: "1rem", // Tailwind pl-4
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: "bold", // Tailwind font-bold
    color: "#a1a1a1", // Tailwind text-gray-500 or any color you want
  }),
  // Add more custom styles if needed
};

const OrderDetails = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    bookAuthor: "",
    bookDescription: "",
    bookGenre: [],
    numberOfPages: "",
    orderType: "",
    bookCondition: "",
    bookPrice: "",
    maxNumberOfDays: "",
    bookISBN: "",
    publicationYear: "",
  });

  // State for the image file and its preview URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  // Event handler for text inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Event handler for file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreviewUrl(URL.createObjectURL(file)); // Create a URL for preview
    }
  };

  // Event handler for the select elements (for genres, order type, and book condition)
  const handleSelectChange = (name) => (selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedOption
        ? Array.isArray(selectedOption)
          ? selectedOption.map((option) => option.value)
          : selectedOption.value
        : "",
    }));
  };

  const handleGenreChange = (selectedOptions) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      bookGenre: selectedOptions || [], // or [] to reset to empty if nothing is selected
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, such as validating input data,
    // send to the server

    // Reset form fields
    setFormData({
      bookName: "",
      bookAuthor: "",
      bookDescription: "",
      bookGenre: [],
      numberOfPages: "",
      orderType: "",
      bookCondition: "",
      bookPrice: "",
      maxNumberOfDays: "",
      bookISBN: "",
      publicationYear: "",
    });

    // Clear selected file and image preview
    setSelectedFile(null);
    setImagePreviewUrl(null);
  };

  // Cleanup preview URL to avoid memory leaks
  useEffect(() => {
    // This will be called before the component unmounts or when imagePreviewUrl changes
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  const inputClassName =
    "pl-5 w-3/4 h-10 placeholder-white placeholder-opacity-50     rounded-lg bg-form shadow-md border-none resize-none focus:outline-none text-white";

  const labelClassName = "w-1/3 text-left text-primary font-bold";

  const formContainerResponsive =
    "max-w-lg m-0  p-6 bg-white rounded-xl shadow-lg";

  return (
    <div className="container m-5 p-0 ">
      <form
        onSubmit={handleSubmit}
        className="flex justify-start items-start space-x-20"
      >
        <div className="flex flex-col justify-start  items-center p-0">
          <div className=" bg-gray-200 rounded-lg shadow-md flex items-start justify-center overflow-hidden">
            {imagePreviewUrl ? (
              <img
                src={imagePreviewUrl}
                alt="Preview"
                className="object-cover h-200 w-96 rounded-lg"
              />
            ) : (
              <AiOutlineCamera className="text-gray-400 " size="400" />
            )}
          </div>

          {/* Attach image button */}
          <label
            htmlFor="bookImage"
            className="mt-4 inline-block bg-primary text-white py-2 px-6 rounded-full cursor-pointer text-lg leading-normal uppercase shadow-md hover:bg-primary-dark hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Attach Image
          </label>

          {/* Hidden file input */}
          <input
            id="bookImage"
            name="bookImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {/* Display the file name */}
          {selectedFile && (
            <p className="text-sm text-gray-500 mt-2">{selectedFile.name}</p>
          )}
        </div>

        <div className={`flex flex-col space-y-6 ${formContainerResponsive}`}>
          <h1 className="text-2xl font-bold text-primary text-left mb-5">
            Add Order Details
          </h1>

          <div className="flex space-x-15 flex-row items-center">
            <label className={labelClassName}>Book&s Name</label>
            <input
              className={inputClassName}
              name="bookName"
              placeholder="Enter book name"
              value={formData.bookName}
              onChange={handleInputChange}
              // Add the rest of your styling classes here
            />
          </div>

          <div className="flex space-x-15 flex-row items-center">
            <label className={labelClassName}>Book&s Author</label>
            <input
              className={inputClassName}
              type="text"
              placeholder="Enter book author"
              name="bookAuthor"
              value={formData.bookAuthor}
              onChange={handleInputChange}
              // Add the rest of your styling classes here
            />
          </div>

          <div className="flex  space-x-15 flex-row items-center ">
            <label className={`${labelClassName} `}>
              Book&apos; Description
            </label>
            <textarea
              className={`${inputClassName} py-2 h-20 `}
              name="bookDescription"
              placeholder="Enter book description"
              value={formData.bookDescription}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex space-x-15 flex-row items-center ">
            <label className={labelClassName}>Genre</label>
            <Select
              isMulti
              name="bookGenre"
              options={popularBookGenres}
              styles={customSelectStyles}
              value={formData.bookGenre}
              placeholder="Select book genre"
              onChange={handleGenreChange}
              className="w-3/4"
            />
          </div>

          <div className="flex space-x-15 flex-row items-center">
            <label className={labelClassName}>Number of Pages</label>
            <input
              className={inputClassName}
              type="number"
              placeholder="Enter number of pages"
              name="numberOfPages"
              value={formData.numberOfPages}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex space-x-15 flex-row items-center">
            <label className={labelClassName}>Order Type</label>
            <Select
              name="orderType"
              options={orderTypeOptions}
              styles={customSelectStyles}
              placeholder="Select order type"
              value={
                orderTypeOptions.find(
                  (option) => option.value === formData.orderType
                ) || ""
              }
              onChange={handleSelectChange("orderType")}
              className="w-3/4"
            />
          </div>

          <div className="flex space-x-15 flex-row items-center">
            <label className={labelClassName}>Book Condition</label>
            <Select
              name="bookCondition"
              options={bookConditionOptions}
              styles={customSelectStyles}
              placeholder="Select book condition"
              value={
                bookConditionOptions.find(
                  (option) => option.value === formData.bookCondition
                ) || ""
              }
              onChange={handleSelectChange("bookCondition")}
              className="w-3/4"
            />
          </div>

          <div className="m-0 flex space-x-15 flex-row items-center">
            <label className={labelClassName}>Book Price:</label>
            <div className=" flex space-x-5 flex-row items-center">
              <input
                className="pl-5 w-1/2 h-10 placeholder-white placeholder-opacity-50     rounded-lg bg-form shadow-md border-none resize-none focus:outline-none text-white"
                type="number"
                name="bookPrice"
                placeholder="Enter price"
                value={formData.bookPrice}
                onChange={handleInputChange}
              />

              {formData.orderType === "rent" && (
                <input
                  className="pl-5 w-1/2 h-10 placeholder-white placeholder-opacity-50     rounded-lg bg-form shadow-md border-none resize-none focus:outline-none text-white"
                  type="number"
                  placeholder="Enter max days"
                  value={formData.maxNumberOfDays}
                  onChange={handleInputChange}
                />
              )}
            </div>
          </div>

          <div className="flex space-x-15 flex-row items-center">
            <label className={labelClassName}>Publication Info</label>
            <div className=" flex space-x-5 flex-row items-center">
              <input
                className={inputClassName}
                type="text"
                name="publicationInfo"
                placeholder="Enter ISBN(s)"
                value={formData.publicationInfo}
                onChange={handleInputChange}
              />
              <span className="">
                <AiOutlineCalendar />
              </span>
              <input
                className={inputClassName}
                id="publicationYear"
                name="publicationYear"
                type="number"
                placeholder="YYYY"
                value={formData.publicationYear}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            onSubmit={handleSubmit}
            type="submit"
            className="w-full text-xl bg-primary text-white px-6 py-3 rounded-md border-none transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none hover:bg-primary  hover:bg-opacity-75"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
