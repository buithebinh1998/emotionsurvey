import React from "react";
import PropTypes from "prop-types";
import C from '../../constants/constants'
import "./ButtonSubmit.component.scss"
const propTypes = {
  title: PropTypes.string
};

const defaultProps = {
  title: C.EMPTY_STRING
};

const ButtonSubmit = props => {
  const { title } = props;
  return (
    <div className = "buttonSubmit">
      <button type="submit" className="btn btn-outline-primary btn-lg btn-block">
        {title}
      </button>
    </div>
  );
};

ButtonSubmit.propTypes = propTypes;
ButtonSubmit.defaultProps = defaultProps;

export default ButtonSubmit;
