import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

test("render App", () => {
  const { getByText } = render(<App />);
  expect(getByText("Welcome to Tandem Trivia!")).toBeInTheDocument();
  expect(getByText("Start Game")).toBeInTheDocument();
});

test("start game", () => {
  const { container } = render(<App />);
  userEvent.click(screen.getByText("Start Game"));
  expect(
    container.querySelector('[class="container-fluid"]')
  ).toBeInTheDocument();
  expect(container.querySelector('[class="list-group"]')).toBeInTheDocument();
});

test("answer question", () => {
  const { container } = render(<App />);
  userEvent.click(screen.getByText("Start Game"));
  userEvent.click(
    container.querySelector(
      '[class="list-group-item list-group-item-outline-dark list-group-item-action"]'
    )
  );
  expect(screen.getByText("Next Question")).toBeInTheDocument();
});
