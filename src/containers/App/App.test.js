import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./";

describe("<App/>", () => {
  afterEach(cleanup);

  test("Renders APP", () => {
    const { getByText } = render(<App />);

    expect(getByText("Search Player")).toBeDefined();
  });
});
