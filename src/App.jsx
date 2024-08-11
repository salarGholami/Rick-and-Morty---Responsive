import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";

function App() {
  const [characters, setCharacters] = useState(allCharacters);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results.slice(0, 5)));
  }, []);

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <NavBar numOfResult={characters.length} />
          </div>
          <div className="col-span-12 md:col-span-5 ">
            <CharacterList characters={characters} />
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
