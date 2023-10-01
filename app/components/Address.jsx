export default function Address() {
  return (
    <div className="bg-black text-white">
      {/* wrapper */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* items */}
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0 justify-around px-8 py-16">
          <div className="flex flex-col max-w-xs w-full mx-auto gap-y-3 text-sm">
            <h1 className="">000 (123) 456 7890</h1>
            <p className="font-light text-stone-400">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
          <div className="flex flex-col max-w-xs w-full mx-auto gap-y-3 text-sm">
            <h1>198 West 21th Street</h1>
            <p className="font-light text-stone-400">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <div className="flex flex-col max-w-xs w-full mx-auto gap-y-3 text-sm">
            <h1>Open Monday-Friday</h1>
            <p className="font-light text-stone-400">8:00am - 9:00pm</p>
          </div>
        </div>
        {/* Appointment box */}
        <div className="bg-orange-300 w-auto p-6">
          <h1 className="">BOOK TABLE</h1>
          <form className="grid gap-y-4 text-sm max-w-sm mt-2">
            <div className="flex flex-col md:flex-row gap-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="text-white bg-transparent py-3 px-2 border-b placeholder:text-white outline-none w-full text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="text-white bg-transparent py-3 px-2 border-b placeholder:text-white outline-none w-full text-sm"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-x-2">
              <input
                type="number"
                placeholder="Date"
                className="text-white bg-transparent py-3 px-2 border-b placeholder:text-white outline-none w-full"
              />
              <input
                type="number"
                placeholder="Time"
                className="text-white bg-transparent py-3 px-2 border-b placeholder:text-white outline-none w-full"
              />
              <input
                type="number"
                placeholder="Phone"
                className="text-white bg-transparent py-3 px-2 border-b placeholder:text-white outline-none w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-x-3">
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="text-white bg-transparent py-3 px-2 border-b flex-1 placeholder:text-white outline-none resize-none"
              ></textarea>
              <button className="bg-white text-black h-fit md:h-full py-4 md:py-0 px-6">
                Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
