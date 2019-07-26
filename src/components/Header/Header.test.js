import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup)

describe("Header test suit", () => {
  it("renders without error", () => {
    const { container } = render(<Header />);
    expect(container).not.toBeNull();
  });
})