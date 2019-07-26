import React from "react";
import { render, cleanup } from "@testing-library/react";
import ProductList from "./ProductList";

afterEach(cleanup)

describe("ProductList test suit", () => {
  it("renders without error", () => {
    const { container } = render(<ProductList />);
    expect(container).not.toBeNull();
  });
})