export default function RightSideProfile() {
  return (
    <>
      <div
        id="right"
        class="bg-backGround w-2/5 p-10"
        // style={{ width: "40%", padding: "20px" }}
      >
        <div className="flex justify-center h-32">
          <img
            src="src\assets\profile.png"
            alt="Profile"
            className="h-100 w-100 rounded-full" // Adjusted profile size and shape
          />
        </div>
        <div class="sm:col-span-3">
          <div class="mt-2">
            <input
              type="button"
              value="Change Profile Picture"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="h-36" />
          <div class="mt-2">
            <input
              type="button"
              value="Books Borrowed- Rented by me"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="h-4" />

          <div class="mt-2">
            <input
              type="button"
              value="Bought-Exchanged books"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="h-4" />

          <div class="mt-2">
            <input
              type="button"
              value="Listed Books"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="h-4" />

          <div class="mt-2">
            <input
              type="button"
              value="Create a New Offer"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
