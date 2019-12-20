import React from "react";
import "./Button.component.scss";
import PropTypes from "prop-types";
import C from '../../constants/constants'
// #region styled-components

// #endregion

// #region functions

// #endregion

// #region constants

// #endregion

// #region component
const propTypes = {
  clicked: PropTypes.func,
  title: PropTypes.string,
  disabled: PropTypes.bool
};

const defaultProps = {
  clicked: () => {},
  title:  C.EMPTY_STRING,
  disabled: false
};

/**
 *
 */
const Button = props => {
  const { clicked, title, disabled } = props;
  return (
    <>
      <a href="/" className={`button ${disabled ? "disabled" : C.EMPTY_STRING}`} onClick={clicked}>
        {title}
      </a>
    </>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
// #endregion

export default Button;
