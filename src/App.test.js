import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("Start game", () => {
  const { container, getByText } = render(<App />);
  expect(getByText("Welcome to Tandem Trivia!")).toBeInTheDocument();
  // userEvent.click(screen.getByText("Start Game"));
  // expect(screen.getByLabelText);
});

it("renders questionBox correctly", () => {
  render();
});
