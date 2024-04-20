import { useState } from "react";
import Select from "react-select";
import { AiOutlineCalendar } from "react-icons/ai"; // Ensure you have react-icons installed

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
    // Add more fields as needed
  });

  const handleImageChange = (e) => {
    // Assuming you want to store the file in state
    const file = e.target.files[0];
    // Now you can use this file to preview or upload to a server
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, such as validating input data,
    // possibly setting up an API call, etc.
  };

  const inputClassName =
    "pl-5 w-3/4 h-10 placeholder-white placeholder-opacity-50     rounded-lg bg-form shadow-md border-none resize-none focus:outline-none text-white";

  const labelClassName = "w-1/3 text-left text-primary font-bold";

  return (
    <div className="container mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="flex p-5 flex-col space-y-10  max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-primary text-left mb-5">
          Add Order Details
        </h1>
        <div className="flex items-center space-x-4">
          <label
            className="block text-primary font-bold xs:w-1/4"
            htmlFor="bookImage"
          >
            Attach Image
          </label>
          <input
            id="bookImage"
            name="bookImage"
            type="file"
            accept="image/*" // Accept images only
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            " // Tailwind CSS File Input classes
          />
        </div>

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
          <label className={`${labelClassName} `}>Book&apos; Description</label>
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
            onChange={(value) => setFormData({ ...formData, bookGenre: value })}
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
            value={orderTypeOptions.find(
              (option) => option.value === formData.orderType
            )}
            onChange={(selectedOption) =>
              setFormData({ ...formData, orderType: selectedOption.value })
            }
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
            value={bookConditionOptions.find(
              (option) => option.value === formData.bookCondition
            )}
            onChange={(selectedOption) =>
              setFormData({ ...formData, bookCondition: selectedOption.value })
            }
            className="w-3/4"
          />
        </div>

        <div className="flex space-x-15 flex-row items-center">
          <label className={labelClassName}>Book Price:</label>
          <div className=" flex space-x-5 flex-row items-center">
            <input
              className={inputClassName}
              type="number"
              name="bookPrice"
              placeholder="Enter book price"
              value={formData.bookPrice}
              onChange={handleInputChange}
            />

            {formData.orderType === "rent" && (
              <input
                className={inputClassName}
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
          type="submit"
          className="w-full bg-primary text-white rounded-lg p-2 hover:bg-primary-dark"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};
export default OrderDetails;
