import { HeartIcon } from "@heroicons/react/24/outline";

function NavBar() {
  return (
    <div className="flex justify-between items-center bg-gray-700 rounded-xl m-6 p-3">
      <div className="">
        <p>
          LOGO <span>😍</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="bg-gray-500 flex justify-center items-center p-3 rounded-lg"
          placeholder="search ..."
        />
      </div>
      <div className="">
        <p>Found X Results</p>
      </div>
      <div className="">
        <button className="relative">
          <HeartIcon className="w-8 h-8 mr-2 text-red-600" />
          <span className="absolute bottom-4 right-0 w-5 h-5 p-2 rounded-full bg-red-600 flex justify-center items-center">4</span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
