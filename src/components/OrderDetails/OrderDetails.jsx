import { useState } from "react";
import Select from "react-select";

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
    // Add more fields as needed
  });

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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-5 flex-col  max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <div className="flex p-5 flex-row items-center">
        <label className="w-1/3 text-center text-primary font-bold">
          Book&s Name
        </label>
        <input
          className="w-3/4 h-10 placeholder-Placeholder placeholder-bold    rounded-full bg-plaster shadow-md border-none resize-none focus:outline-none text-gray-700"
          type="text"
          name="bookName"
          value={formData.bookName}
          onChange={handleInputChange}
          // Add the rest of your styling classes here
        />
      </div>
      <div className="flex p-5 flex-row items-center">
        <label className="w-1/3 text-center text-primary font-bold">
          Book&s Author
        </label>
        <input
          className="w-3/4 h-10 placeholder-Placeholder placeholder-bold    rounded-full bg-plaster shadow-md border-none resize-none focus:outline-none text-gray-700"
          type="text"
          name="bookAuthor"
          value={formData.bookAuthor}
          onChange={handleInputChange}
          // Add the rest of your styling classes here
        />
      </div>

      <div className="flex p-5 flex-row items-center ">
        <label className="w-1/3 text-center text-primary font-bold  ">
          Book&aposs Description:
        </label>
        <textarea
          className="w-3/4 h-20 placeholder-Placeholder placeholder-bold    rounded-full bg-plaster shadow-md border-none resize-none focus:outline-none text-gray-700"
          name="bookDescription"
          value={formData.bookDescription}
          onChange={handleInputChange}
          // Add the rest of your styling classes here
        />
      </div>

      <div className="flex p-5 flex-row">
        <label className="w-1/3">Genre:</label>
        <Select
          isMulti
          name="bookGenre"
          options={popularBookGenres}
          styles={customSelectStyles}
          value={formData.bookGenre}
          onChange={(value) => setFormData({ ...formData, bookGenre: value })}
          // Add any additional props here
        />
      </div>
      {/* Repeat for other fields */}
    </form>

    // <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
    //   <h2 className="text-xl font-bold mb-4">Add Order Details</h2>
    //   <form>

    //     <label className="block">
    //       <span className="text-gray-700">Book's Name</span>
    //       <input
    //         className="form-input mt-1 block w-full"
    //         placeholder="Enter book name"
    //       />
    //     </label>
    //     <input
    //       type="text"
    //       placeholder="Enter book name"
    //       className="mb-4 h-10 rounded-full bg-plaster shadow-md border-none focus:outline-none text-gray-700 w-full px-4"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Enter author name"
    //       className="mb-4 h-10 rounded-full bg-plaster shadow-md border-none focus:outline-none text-gray-700 w-full px-4"
    //     />
    //     <textarea
    //       placeholder="Enter book description..."
    //       className="mb-4 h-20 placeholder-Placeholder placeholder-bold rounded-full bg-plaster shadow-md border-none resize-none focus:outline-none text-gray-700 w-full px-4 py-2"
    //     />
    //     <Select
    //       isMulti
    //       options={popularBookGenres}
    //       styles={customSelectStyles}
    //       className="mb-4"
    //       placeholder="Select Genre(s)"
    //       onChange={setSelectedGenres}
    //       value={selectedGenres}
    //     />
    //     <input
    //       type="number"
    //       placeholder="Enter number of pages"
    //       className="mb-4 h-10 rounded-full bg-plaster shadow-md border-none focus:outline-none text-gray-700 w-full px-4"
    //     />
    //     <Select
    //       options={orderTypeOptions}
    //       styles={customSelectStyles}
    //       className="mb-4"
    //       placeholder="Select Order Type"
    //       onChange={(selectedOption) => setOrderType(selectedOption)}
    //       value={orderTypeOptions.find((option) => option.value === orderType)}
    //     />
    //     {/* Continue building the form... */}
    //   </form>
    // </div>
  );
};
export default OrderDetails;
