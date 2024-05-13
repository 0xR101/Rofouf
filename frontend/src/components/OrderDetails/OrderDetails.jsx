import { useState } from "react";
import Select from "react-select";
import { AiOutlineCalendar } from "react-icons/ai"; // Ensure you have react-icons installed

import { AiOutlineCamera } from "react-icons/ai";
import { useEffect } from "react";

import { popularBookGenres } from "../../constants/genres";

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
    backgroundColor: "rgba(151, 134, 134, 0.5)", // Tailwind bg-plaster or any color you want
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Tailwind shadow-md
    border: "none",
    paddingLeft: "1rem", // Tailwind pl-4
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: "bold", // Tailwind font-bold
    color: "#a2a1a1", // Tailwind text-gray-500 or any color you want
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
    bookISBN: "1254621",
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
    // created function to handle API request
    console.log("working fine..");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:5000/api/v1/books/", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Assuming the response is JSON
      })
      .then((data) => {
        console.log("Data successfully posted:", data);
        // Do something with the response data if needed
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        // Handle any errors that occurred during the fetch
      });

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

  const [iconSize, setIconSize] = useState(window.innerWidth < 640 ? 200 : 400);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 640 ? 200 : 400);
    };

    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    "pl-5  w-full h-10 placeholder-white placeholder-opacity-50     rounded-full bg-lightBrown50 shadow-md border-none resize-none focus:outline-none text-white";

  const labelClassName = "w-1/3 text-left text-primary font-bold";

  const labelInput =
    "flex items-start flex-col  justify-center gap-5  lg:items-center lg:flex-row";
  return (
    <div className="container  m-10 p-0 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  justify-center items-center gap-10  lg:justify-start lg:items-start lg:flex-row      "
      >
        <div className="flex flex-col justify-start  items-center p-0 ">
          <div className=" bg-white rounded-lg shadow-md flex items-start justify-center overflow-hidden">
            {imagePreviewUrl ? (
              <img
                src={imagePreviewUrl}
                alt="Preview"
                className="object-cover h-200 w-96 rounded-lg"
              />
            ) : (
              <AiOutlineCamera className="text-gray-400 " size={iconSize} />
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

        <div className=" flex  flex-col space-y-6 w-full   p-10 bg-white rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold text-primary text-left mb-5">
            Add Order Details
          </h1>

          <div className={labelInput}>
            <label className={labelClassName}>Book&apos;s Name</label>
            <input
              className={inputClassName}
              name="bookName"
              placeholder="Enter book name"
              value={formData.bookName}
              onChange={handleInputChange}
              // Add the rest of your styling classes here
            />
          </div>

          <div className={labelInput}>
            <label className={labelClassName}>Book&apos;s Author</label>
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

          <div className={labelInput}>
            <label className={`${labelClassName} `}>
              Book&apos;s Description
            </label>
            <textarea
              className={`${inputClassName} pt-5 h-10 lg:h-20 `}
              name="bookDescription"
              placeholder="Enter book description"
              value={formData.bookDescription}
              onChange={handleInputChange}
            />
          </div>

          <div className={labelInput}>
            <label className={labelClassName}>Genre</label>
            <Select
              isMulti
              name="bookGenre"
              options={popularBookGenres}
              styles={customSelectStyles}
              value={formData.bookGenre}
              placeholder="Select book genre"
              onChange={handleGenreChange}
              className="w-full"
            />
          </div>

          <div className={labelInput}>
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

          <div className={labelInput}>
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
              className="w-full"
            />
          </div>

          <div className={labelInput}>
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
              className="w-full"
            />
          </div>

          <div className={labelInput}>
            <label className={`${labelClassName} w-1/4`}>Book Price</label>
            <div className=" flex space-x-12 flex-row  flex-grow items-start justify-start w-2/3">
              <input
                className={`${inputClassName}  `}
                type="number"
                name="bookPrice"
                placeholder="Enter price"
                value={formData.bookPrice}
                onChange={handleInputChange}
              />

              {formData.orderType === "rent" && (
                <input
                  type="number"
                  className={`${inputClassName}  `}
                  placeholder="Enter max days"
                  name="maxNumberOfDays"
                  value={formData.maxNumberOfDays}
                  onChange={handleInputChange}
                />
              )}
            </div>
          </div>

          <div className={labelInput}>
            <label className={`${labelClassName} w-1/4`}>
              Publication Info
            </label>
            <div className=" flex space-x-5 flex-row flex-grow items-center w-2/3">
              <input
                className={`${inputClassName}  `}
                type="text"
                name="bookISBN"
                placeholder="Enter ISBN(s)"
                value={formData.bookISBN}  
                onChange={handleInputChange}
              />
              <span className="">
                <AiOutlineCalendar />
              </span>
              <input
                className={`${inputClassName}  `}
                id="publicationYear"
                name="publicationYear"
                type="number"
                placeholder="YYYY"
                value={formData.publicationYear}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row lg:justify-end  justify-center  items-center p-5">
            <button
              onSubmit={handleSubmit}
              type="submit"
              className=" w-2/3 text-xl  font-bold bg-primary text-white px-6 py-3 rounded-full border-none transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none hover:bg-primary  hover:bg-opacity-75"
            >
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;