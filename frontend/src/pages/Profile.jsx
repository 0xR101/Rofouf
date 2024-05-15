import NavBar from "./../components/nav/NavBar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  let username = JSON.parse(localStorage.getItem("currentUser")).username;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/users/getUser?username=${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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

  const handleChange = (event) => {
    setUserData(event.target.value);
  };
  const logout = () => {
    localStorage.clear();
    navigate(`/Signin`);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreviewUrl(URL.createObjectURL(file)); // Create a URL for preview
    }
  };

  const saveUserData = async () => {
    try {
      console.log("Clicked");

      const response = await fetch(
        `http://localhost:5000/api/v1/users/updateUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        console.log("User data updated sucessfully");
        alert("User Updated");
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="flex min-h-screen ">
        <div id="left" class="bg-secondaryBackground w-3/5 p-10">
          <div class="border-b border-gray-900/10 pb-12">
            <h1 class="text-gray-1500 font-poppins">My Personal Profile</h1>

            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <div class="mt-2">
                  <label
                    htmlFor="name"
                    className="  text-base dark:peer-focus:text-primary text-primary px-2   "
                  >
                    <FaUser className="text-primary" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={userData.userName}
                    class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-2">
                  <label
                    htmlFor=""
                    className="  text-base dark:peer-focus:text-primary text-primary px-2   "
                  >
                    <FaUser className="text-primary" /> username
                  </label>
                  <input
                    disabled
                    type="text"
                    name=""
                    value={userData.userId}
                    id="last-name"
                    class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <div class="mt-2">
                  <label
                    htmlFor="mail"
                    className="  text-base dark:peer-focus:text-primary text-primary px-2   "
                  >
                    <HiMail className="text-primary" /> Email
                  </label>
                  <input
                    type="mail"
                    name="mail"
                    id="mail"
                    value={userData.userMail}
                    class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-2">
                  <label
                    htmlFor="number"
                    className="  text-base dark:peer-focus:text-primary text-primary px-2   "
                  >
                    <BsFillTelephoneFill className="text-primary" /> Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    value={userData.userNumber}
                    class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <h1 class="text-gray-1500">My Address</h1>

            <div class="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div class="mt-2 col-span-2">
                <label
                  htmlFor="mail"
                  className="  text-base dark:peer-focus:text-primary text-primary px-2   "
                >
                  <FaLocationDot className="text-primary" /> Address
                </label>
                <input
                  type="text"
                  name="mail"
                  value={userData.userAddress}
                  class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
              {/* <div class="mt-2">
              <label
                htmlFor="user-id"
                className="  text-base dark:peer-focus:text-primary text-primary px-2   "
              >
                <IoMdFingerPrint className="text-primary" /> ID
              </label>
              <input
                type="text"
                name="user-id"
                id="user-id"
                value={userData.userId}
                class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div> */}

              <div class="sm:col-span-1">
                <div class="mt-2">
                  <input
                    type="button"
                    value="Save Information"
                    id="save"
                    class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onClick={saveUserData}
                  />
                </div>
              </div>
              <div class="h-4" />
              <div class="sm:col-span-1">
                <div class="mt-2">
                  <input
                    type="button"
                    value="Log Out"
                    id="delete"
                    onClick={logout}
                    class="bg-danger border border-black block max-w-4xl w-full rounded-md py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="right"
          class="bg-offWhite w-2/5 p-10 items-center"
          // style={{ width: "40%", padding: "20px" }}
        >
          <div className="w-full flex flex-col items-center">
            <div className="h-32 w-32">
              <img
                src={
                  imagePreviewUrl ? imagePreviewUrl : <>image form backend</>
                }
                alt="Profile"
                className="h-32 w-32 rounded-full" // Adjusted profile size and shape
              />
              <label
                htmlFor="bookImage"
                required
                className="rounded-md mt-4 inline-block bg-primary text-white py-2 px-6 cursor-pointer leading-normal  shadow-md hover:bg-primary-dark hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Attach Image
              </label>
            </div>
          </div>

          <div class="sm:col-span-4">
            <div class="mt-2 hidden">
              <input
                id="bookImage"
                name="bookImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
                class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="h-36" />

            <div class="mt-2">
              <input
                type="button"
                onClick={() => navigate("/booksList")}
                value="All Listed Books"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="h-4" />
            {/* 
          <div class="mt-2">
            <input
              type="button"
              onClick={() => navigate("/newOffer")}
              value="Create a New Offer"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div> */}

            <div class="mt-4">
              <input
                type="button"
                onClick={() => navigate("/seller")}
                value="Personal Seller Page"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* <LeftSideProfile/>
        <RightSideProfile /> */}
      </div>

      <Footer></Footer>
    </>
  );
}
