import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  test("renders Footer component with correct content", () => {
    render(<Footer />);

    // Check if the footer element renders
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();

    // Check if the copyright text is present
    expect(footerElement).toHaveTextContent("Copyright © 2024");

    // Check if the link to GitHub is present and has the correct href attribute
    const githubLink = screen.getByText("Nweke Maxwell");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/NwekeMaxwell"
    );

    // Check if the footer text is present
    expect(footerElement).toHaveTextContent("All rights reserved");
  });

  test("footer link navigates to the correct URL", () => {
    render(<Footer />);

    // Check if the GitHub link navigates to the correct URL
    const githubLink = screen.getByText("Nweke Maxwell");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/NwekeMaxwell"
    );
  });
});
