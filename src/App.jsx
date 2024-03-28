import "./App.css";
import { useWeatherContext } from "./lib/contexts/weatherContext";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";
import Search from "./components/search";
import Footer from "./components/Footer";

function App() {
  const { weather, thisLocation, values } =
    useWeatherContext();

  return (
    <>
      <div className="w-screen text-white gradient min-h-screen h-[100%] lg:px-8 overflow-hidden">
        <nav className="w-full flex flex-col md:flex-row justify-between items-center pt-6 px-6 gap-4">
          <h1 className="font-bold tracking-wide text-3xl">Weather Forecast</h1>
          <Search />
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
     <Footer/>
    </>
  );
}

export default App;
