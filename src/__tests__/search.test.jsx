import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios"; // Import axios to mock requests
import Search from "../components/search";
import mockWeatherContext from "../test/__mocks__/weatherContextMock";

jest.mock("../lib/contexts/weatherContext", () => ({
  useWeatherContext: () => mockWeatherContext(),
}));

// Mock axios request
jest.mock("axios");

describe("Search", () => {
  test("renders auto search component", async () => {
    axios.request.mockResolvedValueOnce({ data: { data: [] } });
    render(<Search />);
    //   expect(true).toBeTruthy();
    const searchComponent = screen.getByTestId("search-component");
    expect(searchComponent).toBeInTheDocument();
  });

  test("displays search input", () => {
    axios.request.mockResolvedValueOnce({ data: { data: [] } });
    render(<Search />);
    const searchInput = screen.getByPlaceholderText("Search city");
    expect(searchInput).toBeInTheDocument();
  });
});
