import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";
import mockWeatherContext from "../test/__mocks__/weatherContextMock";

jest.mock("../lib/contexts/weatherContext", () => ({
  useWeatherContext: () => mockWeatherContext(),
}));

describe("WeatherCard", () => {
  // Sample props for testing
  const props = {
    temperature: 25,
    windspeed: 10,
    humidity: 50,
    place: "Enugu, Nigeria",
    heatIndex: 30,
    iconString: "cloudy",
    conditions: "Cloudy",
  };

  test("renders WeatherCard component", () => {
    render(<WeatherCard {...props} />);
    // expect(true).toBeTruthy();
    const weatherCardElement = screen.getByTestId("weather-card");
    expect(weatherCardElement).toBeInTheDocument();
  });

  test("displays temperature in Celsius", () => {
    render(<WeatherCard {...props} />);
    const temperatureElement = screen.getByText("25 °C");
    expect(temperatureElement).toBeInTheDocument();
  });

  test("displays correct place name", () => {
    render(<WeatherCard {...props} />);
    const placeElement = screen.getByText("Enugu, Nigeria");
    expect(placeElement).toBeInTheDocument();
  });

  test("displays correct humidity value", () => {
    render(<WeatherCard {...props} />);
    const humidityElement = screen.getByText("50 gm/m³");
    expect(humidityElement).toBeInTheDocument();
  });

  test("displays correct wind speed value", () => {
    render(<WeatherCard {...props} />);
    const windSpeedElement = screen.getByText("10 km/h");
    expect(windSpeedElement).toBeInTheDocument();
  });

  test("displays correct heat index value", () => {
    render(<WeatherCard {...props} />);
    const heatIndexElement = screen.getByText("30");
    expect(heatIndexElement).toBeInTheDocument();
  });

  test("displays correct weather conditions", () => {
    render(<WeatherCard {...props} />);
    const conditionsElement = screen.getByText("Cloudy");
    expect(conditionsElement).toBeInTheDocument();
  });
});
