import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import Button from "../Button";
import { Wrapper, Image, Title, Overview, OldPrice, Price, Installments } from "./style";

const Card = ({ product }) => (
  <Wrapper>
    <Image src={product.image} alt={product.name} />
    <Title>{product.name}</Title>
    <Overview>{product.description}</Overview>
    <OldPrice>De: {numeral(product.oldPrice).format('$0,0.00')}</OldPrice>
    <Price>Por: {numeral(product.price).format('$0,0.00')}</Price>
    <Installments>ou {product.installments.count}x de {numeral(product.installments.value).format('$0,0.00')}</Installments>
    <Button flat small block>Comprar</Button>
  </Wrapper>
);

Card.propTypes = {
  product: PropTypes.object.isRequired
}

export default Card;
