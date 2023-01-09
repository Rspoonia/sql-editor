import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("main-wrapper")).toBeInTheDocument();
});
