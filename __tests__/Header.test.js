import { render, screen, fireEvent } from "@testing-library/react";
import Header from "src/app/components/Header/Header.jsx";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders the Header component with logo and navigation links", () => {
    render(<Header />);

    // Check if the logo is rendered
    const logo = screen.getByAltText("Birmingham Business logo");
    expect(logo).toBeInTheDocument();

    // Check if the navigation links are rendered
    const homeLink = screen.getByText("Home");
    const newsLink = screen.getByText("News");
    const featuresLink = screen.getByText("Features and Analysis");
    const fiveMinutesLink = screen.getByText("Five Minutes With");
    const insightsLink = screen.getByText("Insights");
    const archiveLink = screen.getByText("Magazine Archive");

    expect(homeLink).toBeInTheDocument();
    expect(newsLink).toBeInTheDocument();
    expect(featuresLink).toBeInTheDocument();
    expect(fiveMinutesLink).toBeInTheDocument();
    expect(insightsLink).toBeInTheDocument();
    expect(archiveLink).toBeInTheDocument();
  });

  //   test("toggles the search box visibility when search button is clicked", () => {
  //     render(<Header />);

  //     const searchButton = screen.getByRole("button", { name: /toggle search box/i });
  //     const searchBox = screen.getByPlaceholderText(" Search");

  //     // Verify the search box is initially hidden
  //     expect(searchBox).toHaveClass("responsive_search");

  //     // Click the search button to toggle visibility
  //     fireEvent.click(searchButton);

  //     // Verify the search box is now visible
  //     expect(searchBox).toHaveClass("searchBox");

  //     // Click the search button again to hide it
  //     fireEvent.click(searchButton);

  //     // Verify the search box is hidden again
  //     expect(searchBox).toHaveClass("responsive_search");
  //   });

  test("toggles the cross visibility when burger icon is clicked", () => {
    render(<Header />);

    const burgerButton = screen.getByRole("button", { name: /open navigation/i });
    const crossButton = screen.getByRole("button", { name: /close navigation/i });

    // Verify the burger icon is initially visible
    expect(burgerButton).toHaveClass("burgerIcon");

    // Click the burger button to toggle menu and cross visibility
    fireEvent.click(burgerButton);

    // Verify cross is now visible
    expect(crossButton).toHaveClass("navCross");

    // Click the cross button to hide it again
    fireEvent.click(crossButton);

    // Verify the burger icon is visible again
    expect(burgerButton).toHaveClass("burgerIcon");
  });
});
