import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
