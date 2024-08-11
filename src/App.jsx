import { useEffect, useState } from "react";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetcHData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        setCharacters(data.results.slice(0, 3));
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetcHData();
  }, []);

  return (
    <div className="">
      <Toaster />
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <NavBar numOfResult={characters.length} />
          </div>
          <div className="col-span-12 md:col-span-5">
            {isLoading ? <Loader /> : <CharacterList characters={characters} />}
          </div>
          <div className="col-span-12 md:col-span-7">
            <CharacterDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
