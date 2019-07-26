import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "./Home";

afterEach(cleanup)

describe("Home test suit", () => {
  it("renders without error", () => {
    const { container } = render(<Home />);
    expect(container).not.toBeNull();
  });
})

