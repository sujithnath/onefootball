import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import { server } from "../../mocks/server";
import userEvent from "@testing-library/user-event";

import SearchPlayer from "./";

beforeEach(cleanup);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockSetPlayerDetails = (value) => {};

describe("<SearchPlayer/>", () => {
  test("Renders search box", () => {
    const { getByText } = render(
      <SearchPlayer setPlayerDetails={mockSetPlayerDetails} />,
    );

    expect(getByText("Search Player")).toBeDefined();
  });

  test("Renders error if player id not entered", () => {
    const { getByText } = render(
      <SearchPlayer setPlayerDetails={mockSetPlayerDetails} />,
    );

    fireEvent.click(screen.getByTestId("searchAction"));
    expect(getByText("Please enter player details")).toBeDefined();
  });

  test("Search Input", async () => {
    const { getByTestId } = render(
      <SearchPlayer setPlayerDetails={mockSetPlayerDetails} />,
    );

    const inputPointer = getByTestId("searchInput");

    fireEvent.change(inputPointer, { target: { value: "fabio" } });
    // userEvent.click(screen.getByTestId("searchAction"));
  });
});
