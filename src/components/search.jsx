import React, { useState, useEffect } from "react";
import { useWeatherContext } from "../lib/contexts/weatherContext";
import { LoaderIcon } from "react-hot-toast";
import searchIcon from "../assets/icons/search.svg";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [options, setoptions] = useState([]);
  const { setPlace, loading } = useWeatherContext();

  //fetch cities function utilizing rapid api GeoDB cities API
  const fetchOptions = async () => {
    const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: {
        namePrefix: search,
      },
      headers: {
        "X-RapidAPI-Key": "0b025d2537msh80c1f91c6260e47p1be4eejsn7c49c199c834",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setoptions(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // function to update the location/place state and trigger fetch weather function
  const submitCity = () => {
    setPlace(search);
    setSearch("");
  };

  useEffect(() => {
    //fetch cities on every user interaction with the search input
    fetchOptions();
  }, [search]);

  return (
    <div className="relative" data-testid="search-component">
      <div className="w-[15rem] bg-white overflow-hidden shadow-2xl rounded-lg flex items-center p-2 gap-2">
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCity();
            }
          }}
          type="text"
          placeholder="Search city"
          className="focus:outline-none w-full text-[#212121] text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={searchIcon}
          onClick={submitCity}
          alt="search"
          className={`w-[1.5rem] animate-${
            search.length > 0 ? "spin" : "pulse"
          } h-[1.5rem] rounded-full active:scale-75 transition-all duration-500 cursor-pointer`}
        />
        {loading && <LoaderIcon style={{ width: "20px", height: "20px" }} />}
      </div>
      {search.length > 0 && (
        <div className="absolute left-0 top-[110%] rounded z-40 bg-white w-full max-h-[25vh] overflow-y-scroll">
          {options.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSearch(item.city);
                  //   setTimeout(submitCity, 2000);
                }}
                className="px-1 py-2 text-black border-b border-solid hover:bg-gray-200 cursor-pointer"
              >
                {`${item.city}, ${item.country}`}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Search;
