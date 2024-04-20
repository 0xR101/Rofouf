export default function LeftSideProfile({
  userName = "",
  userMail = "",
  userNumber = "",
  userAddress = "",
  userId,
}) {
  return (
    <>
      <div id="left" class="bg-secondaryBackground w-3/5 p-10">
        <div class="border-b border-gray-900/10 pb-12">
          <h1 class="text-gray-1500 font-poppins">My Personal Profile</h1>

          <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={userName}
                  class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  name=""
                  value="@iam.a.real.user"
                  id="last-name"
                  class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-3">
              <div class="mt-2">
                <input
                  type="mail"
                  name="mail"
                  id="mail"
                  value={userMail}
                  class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="mt-2">
                <input
                  type="number"
                  name="number"
                  id="number"
                  value={userNumber}
                  class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <h1 class="text-gray-1500">My Address</h1>

          <div class="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div class="mt-2">
              <input
                type="text"
                name="mail"
                value={userAddress}
                class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div class="mt-2">
              <input
                type="text"
                name="user-id"
                id="user-id"
                value={userId}
                class="bg-backGround block w-full rounded-md border border-primary px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="sm:col-span-1">
              <div class="mt-2">
                <input
                  type="button"
                  value="Save Information"
                  id="save"
                  class="bg-primary block w-full rounded-md border-0 py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="h-4" />
            <div class="sm:col-span-1">
              <div class="mt-2">
                <input
                  type="button"
                  value="Delete Account"
                  id="delete"
                  class="bg-danger border border-black block max-w-4xl w-full rounded-md py-1.5 text-white shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
