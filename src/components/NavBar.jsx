import { HeartIcon } from "@heroicons/react/24/outline";

function NavBar({ children }) {
  return (
    <div className="flex justify-between items-center bg-gray-700 rounded-xl my-3 mx-2 p-2">
      {children}
    </div>
  );
}

export default NavBar;

export function Favourite({ numOfFavourites }) {
  return (
    <button className="relative">
      <HeartIcon className="w-6 h-6 mr-2 text-red-600" />
      <span className="absolute bottom-3 right-0 w-2 h-2 p-2 rounded-full bg-red-600 flex justify-center items-center text-xs">
        {numOfFavourites}
      </span>
    </button>
  );
}

export function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      className="bg-gray-500 flex justify-center items-center p-3 rounded-lg "
      placeholder="search ..."
    />
  );
}

export function SearchResult({ numOfResult }) {
  return <p>Found {numOfResult} Results</p>;
}

export function Logo() {
  return (
    <p>
      LOGO <span>😍</span>
    </p>
  );
}
