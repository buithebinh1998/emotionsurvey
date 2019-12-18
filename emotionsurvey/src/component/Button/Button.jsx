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
  title: PropTypes.string
};

const defaultProps = {
  clicked: () => {},
  title:  C.EMPTY_STRING
};

/**
 *
 */
const Button = props => {
  const { clicked, title } = props;
  return (
    <>
      <a href="/" className="button" onClick={clicked}>
        {title}
      </a>
    </>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
// #endregion

export default Button;
