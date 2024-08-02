import { allCharacters } from "../data/data";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <NavBar />
          </div>
          <div className="col-span-12 md:col-span-5 ">
            <CharacterList AllCharcaters={allCharacters} />
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
