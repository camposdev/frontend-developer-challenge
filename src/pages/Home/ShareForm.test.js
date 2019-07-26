import React from "react";
import { render, cleanup } from "@testing-library/react";
import ShareForm from "./ShareForm";

afterEach(cleanup)

describe("ShareForm test suit", () => {
  it("renders without error", () => {
    const { container } = render(<ShareForm />);
    expect(container).not.toBeNull();
  });
})