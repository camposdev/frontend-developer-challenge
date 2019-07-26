import React from "react";
import PropTypes from "prop-types";
import { TitleComponent } from "./style";

const TitleSection = ({ children }) => (<TitleComponent>{children}</TitleComponent>);

TitleSection.propTypes = {
  children: PropTypes.any.isRequired
};

export default TitleSection;
