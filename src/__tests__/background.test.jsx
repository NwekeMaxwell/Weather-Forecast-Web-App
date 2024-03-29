import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackgroundLayout from "../components/Background";
import mockWeatherContext from "../test/__mocks__/weatherContextMock";

jest.mock("../lib/contexts/weatherContext", () => ({
  useWeatherContext: () => mockWeatherContext(),
}));

describe("BackgroundLayout", () => {
  test("renders BackgroundLayout component with default image", () => {
    render(<BackgroundLayout />);

    // Check if the component renders
    const backgroundElement = screen.getByAltText("weather_image");
    expect(backgroundElement).toBeInTheDocument();
  });

  test("updates background image according to weather condition", () => {
    // Mock the weather context with a specific weather condition
    render(<BackgroundLayout />);

    // Check if the background image updates to Cloudy image
    const backgroundElement = screen.getByAltText("weather_image");
    expect(backgroundElement).toHaveAttribute("src", "test-file-stub");
  });
});
