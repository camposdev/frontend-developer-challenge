import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card";

const mock = {
  description: "Product long description number 0 just to make more than one like of text.",
  id: 0,
  image: "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178",
  installments: {count: 10, value: 35.2},
  name: "Product Number 0",
  oldPrice: 398,
  price: 352
}

describe("Card test suit", () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Card product={mock} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});