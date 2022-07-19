import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import UnauthAppBar from "../UnauthAppBar";

test("Render logo", () => {
  render(<UnauthAppBar />, { wrapper: MemoryRouter });
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
})

test("Render login signup button", () => {
  render(<UnauthAppBar />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test("Render About Us button", () => {
  render(<UnauthAppBar />, { wrapper: MemoryRouter });
  const linkElement = screen.getByRole("link", { name: "About Us" });
  expect(linkElement).toBeInTheDocument();
})
