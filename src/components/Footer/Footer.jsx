import React from "react";
import Container from "../Container";
import { Wrapper, Text } from "./style";

const Footer = () => (
  <Wrapper>
    <Container>
      <Text>Testando suas habilidades em HTML, CSS e JS.</Text>
      <Text>Linx Impulse</Text>
      <Text>{new Date().getFullYear()}</Text>
    </Container>
  </Wrapper>
);

export default Footer;
