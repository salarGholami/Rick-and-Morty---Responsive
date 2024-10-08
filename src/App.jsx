import { useEffect, useState } from "react";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import NavBar, {
  Favourite,
  Logo,
  Search,
  SearchResult,
} from "./components/NavBar";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";
import useCharacter from "./hooks/useCharacters";

function App() {
  const [query, setQuery] = useState("");
  const { isLoading, characters } = useCharacter(
    "https://rickandmortyapi.com/api/character/?name",
    query
  );
  const [selectedId, serSelectedId] = useState(null);
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem("FAVOURITES")) || []
  );

  useEffect(() => {
    localStorage.setItem("FAVOURITES", JSON.stringify(favourites));
  }, [favourites]);

  const onSelectCharacter = (id) => {
    serSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavourite = (charr) => {
    setFavourites((prevFav) => [...prevFav, charr]);
  };

  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId);

  const HandelDeleteFavourite = (id) => {
    setFavourites((prevFav) => prevFav.filter((fav) => fav.id !== id));
  };
  return (
    <div className="">
      <Toaster />
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <NavBar>
              <Logo />
              <Search query={query} setQuery={setQuery} />
              <div className="hidden md:flex">
                <SearchResult numOfResult={characters.length} />
              </div>
              <div className="hidden md:flex">
                <Favourite
                  favourites={favourites}
                  onDeleteFavourite={HandelDeleteFavourite}
                />
              </div>
            </NavBar>
          </div>
          <div className="col-span-12 md:col-span-5">
            {isLoading ? (
              <Loader />
            ) : (
              <CharacterList
                characters={characters}
                selectedId={selectedId}
                onSelectCharacter={onSelectCharacter}
              />
            )}
          </div>
          <div className="col-span-12 md:col-span-7">
            <CharacterDetail
              selectedId={selectedId}
              onAddFavourite={handleAddFavourite}
              isAddToFavourite={isAddToFavourite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
