import React from "react";
import PropTypes from "prop-types";
import { ContainerComponent } from "./style";

const Container = ({ children }) => (
  <ContainerComponent>
    {children}
  </ContainerComponent>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
