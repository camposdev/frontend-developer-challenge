import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loading from "./Loading";

afterEach(cleanup);

describe("Loading test suit", () => {
  it("renders without error", () => {
    const { container } = render(<Loading />);
    expect(container).not.toBeNull();
  });
})