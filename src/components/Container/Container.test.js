import React from "react";
import renderer from "react-test-renderer";
import Container from "./Container";

describe("Container test suit", () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Container>Content</Container>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});