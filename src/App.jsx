import { useEffect, useState } from "react";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetcHData() {
      try {
        setIsLoading(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) throw new Error("somethiong went wrong");
        const data = await res.json();
        setCharacters(data.results.slice(0, 3));
      } catch (err) {
        toast.error(err.message);
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
