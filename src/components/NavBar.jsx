import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import { Character } from "./CharacterList";
import { useState } from "react";

function NavBar({ children }) {
  return (
    <div className="flex justify-between items-center bg-gray-700 rounded-xl my-3 mx-2 p-2">
      {children}
    </div>
  );
}

export default NavBar;

export function Favourite({ favourites, onDeleteFavourite }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="List of Favourites"
      >
        <div className=" m-4">
          {favourites.map((item) => (
            <Character
              key={item.id}
              item={item}
              selectedId="1"
              onSelectCharacter={() => {}}
            >
              <TrashIcon
                className="w-8 h-8 text-red-500 hover:border p-1 rounded-full border-red-500 cursor-pointer"
                onClick={() => onDeleteFavourite(item.id)}
              />
            </Character>
          ))}
        </div>
      </Modal>
      <button className="relative" onClick={() => setShowModal((is) => !is)}>
        <HeartIcon className="w-6 h-6 mr-2 text-red-600" />
        <span className="absolute bottom-3 right-0 w-2 h-2 p-2 rounded-full bg-red-600 flex justify-center items-center text-xs">
          {favourites.length}
        </span>
      </button>
    </div>
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
