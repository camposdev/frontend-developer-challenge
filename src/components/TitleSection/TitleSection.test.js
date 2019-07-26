import React from "react";
import renderer from "react-test-renderer";
import TitleSection from "./TitleSection";

describe("TitleSection test suit", () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TitleSection>Helo World</TitleSection>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});