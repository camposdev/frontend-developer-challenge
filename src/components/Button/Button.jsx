import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "./style";

const Button = ({ children, href, ...props }) => {
  if (href) return <ButtonComponent as="a" {...props}>{children}</ButtonComponent>;
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

Button.propTypes = {
  block: PropTypes.bool,
  small: PropTypes.bool,
  flat: PropTypes.bool
};

Button.defaultProps = {
  block: false,
  small: false,
  flat: false
}

export default Button;
