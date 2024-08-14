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
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, serSelectedId] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function fetcHData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );

        setCharacters(data.results.slice(0, 5));
      } catch (err) {
        setCharacters([]);
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setCharacters([]);
      return;
    }

    fetcHData();
  }, [query]);

  const onSelectCharacter = (id) => {
    serSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavourite = (charr) => {
    setFavourites((prevFav) => [...prevFav, charr]);
  };

  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId);

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
                <Favourite numOfFavourites={favourites.length} />
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
