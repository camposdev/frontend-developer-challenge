import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button test suit", () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button>Click me</Button>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});