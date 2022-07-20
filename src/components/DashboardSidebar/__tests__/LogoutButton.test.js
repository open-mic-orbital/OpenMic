import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import LogoutButton from "../LogoutButton";

test("Logout Button to be a single list item", () => {
  render(<LogoutButton />, { wrapper: MemoryRouter });
  const items = screen.getAllByRole("listitem");
  expect(items.length).toBe(1);
});
