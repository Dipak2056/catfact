import { render, screen } from "@testing-library/react";
import AppWrapper from "./App";

//rendering of the components on app loading

test("renders react-redux component", () => {
  render(<AppWrapper />);
  const linkElement = screen.getByText(/Refresh/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders cat Animation", () => {
  render(<AppWrapper />);
  const catAnimation = screen.getByTestId(/catanimation/i);
  expect(catAnimation).toBeInTheDocument();
});
test("renders counter Number", () => {
  render(<AppWrapper />);
  const counterNumber = screen.getByTestId(/counterNumber/i);
  expect(counterNumber).toBeInTheDocument();
});
test("renders Fact container", () => {
  render(<AppWrapper />);
  const factContainer = screen.getByTestId(/factContainer/i);
  expect(factContainer).toBeInTheDocument();
});
test("renders Refresh Button", () => {
  render(<AppWrapper />);
  const refreshButton = screen.getByRole("button");
  expect(refreshButton).toBeInTheDocument();
});
//testing if the button is clickable
test("button should be clickable", () => {
  render(<AppWrapper />);
  const clickableBtn = screen.getByRole("button");
  expect(clickableBtn).toBeEnabled();
});
