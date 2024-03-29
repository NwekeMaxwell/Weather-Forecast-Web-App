import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MiniCard from "../components/MiniCard";

describe("MiniCard", () => {
  // Sample props for testing
  const props = {
    time: new Date().toISOString(), // Current time
    temp: 20,
    iconString: "cloudy",
  };

  test("renders MiniCard component", () => {
    render(<MiniCard {...props} />);
    const miniCardElement = screen.getByTestId("mini-card");
    expect(miniCardElement).toBeInTheDocument();
  });

  test("displays correct icon for weather conditions", () => {
    render(<MiniCard {...props} />);
    const iconElement = screen.getByAltText("forecast not available");
    expect(iconElement).toBeInTheDocument();
  });

  test("displays correct weather conditions", () => {
    render(<MiniCard {...props} />);
    const conditionsElement = screen.getByText("cloudy");
    expect(conditionsElement).toBeInTheDocument();
  });
});
