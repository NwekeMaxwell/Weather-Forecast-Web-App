import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useWeatherContext } from "./lib/contexts/weatherContext";
import BackgroundLayout from "./components/Background";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";
import { LoaderIcon } from "react-hot-toast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace, loading } =
    useWeatherContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <>
      <div className="w-screen text-white gradient min-h-screen h-[100%] lg:px-8 overflow-hidden">
        {/* <Search onSearchChange={handleOnSearchChange}/> */}
        <nav className="w-full flex flex-col md:flex-row justify-between items-center pt-6 px-6 gap-4">
          <h1 className="font-bold tracking-wide text-3xl">Weather Forecast</h1>
          <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded-lg flex items-center p-2 gap-2">
            <img
              src={search}
              onClick={submitCity}
              alt="search"
              className="w-[1.5rem] h-[1.5rem] active:scale-75 transition-all duration-500"
            />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  // sumit the form
                  submitCity();
                }
              }}
              type="text"
              placeholder="Search city"
              className="focus:outline-none w-full text-[#212121] text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {loading && (
              <LoaderIcon style={{ width: "20px", height: "20px" }} />
            )}
          </div>
        </nav>
        <main className="w-full flex flex-col md:flex-row flex-wrap gap-8 py-4 items-center justify-center">
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />
          <div className="w-[50%] flex flex-col  justify-center items-center">
            <h1 className="capitalize font-bold py-4 text-center text-2xl w-fit">
              Week Ahead (Next 6 days)
            </h1>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {values?.slice(1, 7).map((curr) => {
                return (
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
                    temp={curr.temp}
                    iconString={curr.conditions}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
      <footer className="pt-4 pb-2 px-2 text-center bg-blue-900 text-white w-full">
        Copyright &copy; 2024{" "}
        <a
          href="https://github.com/NwekeMaxwell"
          className="underline cursor-pointer font-bold"
        >
          Nweke Maxwell
        </a>
        . All rights reserved
      </footer>
    </>
  );
}

export default App;
