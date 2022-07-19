import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import AuthAppBar from "../AuthAppBar";

test("Render drawer", () => {
  render(<AuthAppBar />, { wrapper: MemoryRouter });
  const linkElement = screen.getByRole("button", { name: "Open settings" });
  expect(linkElement).toBeInTheDocument();
})
