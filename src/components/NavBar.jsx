import { HeartIcon } from "@heroicons/react/24/outline";

function NavBar({ numOfResult }) {
  return (
    <div className="flex justify-between items-center bg-gray-700 rounded-xl my-3 mx-2 p-2">
      <div className="text-sm md:text-base">
        <p>
          LOGO <span>😍</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="bg-gray-500 flex justify-center items-center p-3 rounded-lg "
          placeholder="search ..."
        />
      </div>
      <div className="hidden md:flex">
        <p>Found {numOfResult} Results</p>
      </div>
      <div className=" hidden md:flex">
        <button className="relative">
          <HeartIcon className="w-6 h-6 mr-2 text-red-600" />
          <span className="absolute bottom-3 right-0 w-2 h-2 p-2 rounded-full bg-red-600 flex justify-center items-center text-xs">
            4
          </span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
