import { EyeIcon } from "@heroicons/react/24/outline";


function CharacterList({characters}) {
 
  return (
    <div className="grid grid-cols-12 my-3 mx-2 gap-5">
      {characters.map((item) => (
        <Character item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  return (
    <div className="col-span-12">
      <div className="grid grid-cols-12">
        <div className="col-span-12 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-xl">
          <div className="flex justify-between items-center p-3">
            <div className="flex">
              <div className="w-14">
                <img src={item.image} className="rounded-xl" alt="" />
              </div>
              <div className=" ml-2 flex flex-col justify-start">
                <CharacterName item={item} />
                <div className="flex justify-start items-center">
                  <div className="mx-2">
                    {item.status === "Dead" ? (
                      <span className="bg-red-700 w-2 h-2 flex justify-center items-center rounded-full"></span>
                    ) : (
                      <span className="bg-green-700 w-2 h-2 flex justify-center items-center rounded-full"></span>
                    )}
                  </div>
                  <CharacterInfo item={item}/>
                </div>
              </div>
            </div>
            <div className=" w-5 text-red-700">
              <EyeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CharacterName({ item }) {
  return (
    <div className="flex cursor-pointer">
      <span>{item.gender === "Male" ? "👨" : "👩"}</span>
      <p>{item.name}</p>
    </div>
  );
}

function CharacterInfo({ item }) {
  return (
    <div className="text-sm">
      {item.status} - {item.species}
    </div>
  );
}
