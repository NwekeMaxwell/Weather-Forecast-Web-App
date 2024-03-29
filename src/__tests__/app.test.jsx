import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import mockWeatherContext from "../test/__mocks__/weatherContextMock";

//mock weather api details
jest.mock("../lib/contexts/weatherContext", () => ({
  useWeatherContext: () => mockWeatherContext(),
}));

test("renders App component", async () => {
  render(<App />);
  // expect(true).toBeTruthy();

  // Check if the main title is rendered
  const mainTitle = screen.getByText("Weather Forecast");
  expect(mainTitle).toBeInTheDocument();

  // Check if the search component is rendered
  const searchComponent = screen.getByTestId("search-component");
  expect(searchComponent).toBeInTheDocument();

  // Check if the weather card is rendered
  const weatherCard = screen.getByTestId("weather-card");
  expect(weatherCard).toBeInTheDocument();

  // Check if mini cards are rendered for the week ahead
  const miniCards = screen.getByTestId("mini-card");
  expect(miniCards).toBeInTheDocument(); // At least one mini card should be rendered

  // Check if the footer is rendered
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
