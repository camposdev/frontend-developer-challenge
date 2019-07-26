import React from "react";
import Container from "../Container";
import Button from "../Button";
import { Wrapper, Title, Small, SubTitle, Actions } from "./style";

const Header = () => (
  <Wrapper>
    <Container>
      <Title>
        <Small>uma seleção de produtos</Small>
        especial para você
      </Title>

      <SubTitle>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</SubTitle>

      <Actions>
        <Button href="#">Conheça a Linx</Button>
        <Button href="#">Ajude o algorítmo</Button>
        <Button href="#">Seus produtos</Button>
        <Button href="#">Compartilhe</Button>
      </Actions>
    </Container>
  </Wrapper>
);

export default Header;
