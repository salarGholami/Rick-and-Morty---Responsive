import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";

function CharacterDetail({ selectedId, onAddFavourite, isAddToFavourite }) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setCharacter(data);

        const episodesId = data.episode.map((e) => e.split("/").at(-1)); // [1, 2, 3]
        const { data: episodeData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodeData].flat().slice(0, 6));
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedId) fetchData();
  }, [selectedId]);

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!character || !selectedId)
    return (
      <div className="m-3 text-center">
        <p>Please select a character !!</p>
      </div>
    );

  return (
    <div className="grid grid-cols-12 gap-y-5 md:gap-y-6 m-3 mt-7 md:mt-3">
      <div className="col-span-12">
        <CharacterSubInfo
          onAddFavourite={onAddFavourite}
          isAddToFavourite={isAddToFavourite}
          character={character}
        />
      </div>
      <div className="col-span-12">
        <EpisodeList episodes={episodes} />
      </div>
    </div>
  );
}

export default CharacterDetail;

function CharacterSubInfo({ character, isAddToFavourite, onAddFavourite }) {
  return (
    <div className="flex flex-row bg-gray-800 rounded-lg overflow-hidden">
      <div className="w-44 md:w-48">
        <img src={character.image} className="w-full" alt="" />
      </div>
      <div className="">
        <div className="flex justify-between items-center p-3">
          <div className="flex">
            <div className="flex flex-col justify-start">
              <div className="flex justify-start items-center cursor-pointer">
                <span>{character.gender === "Male" ? "👨" : "👩"}</span>
                <p>{character.name}</p>
              </div>
              <div className="flex justify-start items-center">
                <div className="mx-2">
                  {character.status === "Dead" ? (
                    <span className="bg-red-700 w-2 h-2 flex justify-center items-center rounded-full"></span>
                  ) : (
                    <span className="bg-green-700 w-2 h-2 flex justify-center items-center rounded-full"></span>
                  )}
                </div>
                <div className="text-xs">
                  {character.status} - {character.species}
                </div>
              </div>
              <div className="flex flex-col mx-2 my-4 md:my-6">
                <div className="text-sm text-gray-400">
                  last know location :
                </div>
                <div className="text-sm">{character.location.name}</div>
              </div>
              <div className="">
                {isAddToFavourite ? (
                  <p className="text-slate-400 text-sm ">
                    Allready added To Favourites ✅
                  </p>
                ) : (
                  <button
                    className="bg-gray-500 p-2 text-sm rounded-xl"
                    onClick={() => onAddFavourite(character)}
                  >
                    Add to Favourite
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EpisodeList({ episodes }) {
  const [sortBy, setSortby] = useState(true);

  let sortedEpisodes;

  if (sortBy) {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }



  return (
    <div className="flex flex-col bg-gray-800 p-3 rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <div className="">
          <p className="text-gray-400 text-xl">List of Episodes :</p>
        </div>
        <div className="">
          <button
            className="w-8 h-8 p-1 flex justify-between items-center bg-gray-700 rounded-full"
            onClick={() => setSortby((is) => !is)}
          >
            <ArrowUpCircleIcon
              className={
                sortBy
                  ? "rotate-0  transition duration-500 ease-in-out"
                  : "rotate-180  transition duration-500 ease-in-out"
              }
            />
          </button>
        </div>
      </div>
      <div className="">
        <ul className="space-y-2">
          {sortedEpisodes.map((item, index) => {
            return (
              <li
                className="flex justify-between items-center text-sm text-gray-400"
                key={index}
              >
                <div className="cursor-pointer">
                  {String(index + 1).padStart(2, "0")} - {item.episode} :{" "}
                  <strong>{item.name}</strong>
                </div>
                <div className="bg-gray-600 cursor-pointer py-1 px-3 rounded-lg">
                  {item.air_date}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
