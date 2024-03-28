import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const StateContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Enugu,Nigeria");
  const [thisLocation, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch api
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      },
      headers: {
        "X-RapidAPI-Key": "0b025d2537msh80c1f91c6260e47p1be4eejsn7c49c199c834",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(response.data.locations)[0];
      console.log("thisData", thisData);
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
      // if the api throws error.
      if (
        e.response.data ===
        "Bad API Request:No rows were returned. Please verify the location and dates requested"
      ) {
        toast.error("This city does not exist!");
      } else {
        toast.error(e.message);
      }
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log("values", values);
    console.log("weather", weather);
    console.log("place", place);
    console.log("location", thisLocation);
  }, [values, weather, place, thisLocation]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useWeatherContext = () => useContext(StateContext);
