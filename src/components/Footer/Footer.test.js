import React from "react";
import { render, cleanup } from "@testing-library/react";
import Footer from "./Footer";

afterEach(cleanup)

describe("Footer test suit", () => {
  it("renders without error", () => {
    const { container } = render(<Footer />);
    expect(container).not.toBeNull();
  });
})