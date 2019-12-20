import React from "react";
import "./TextInput.component.scss";
import PropTypes from "prop-types";
import { Field } from "formik";
import C from "../../constants/constants";
// #region styled-components

// #endregion

// #region functions

// #endregion

// #region constants

// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.string,
  title: PropTypes.string
};

const defaultProps = {
  name: C.EMPTY_STRING,
  value: C.EMPTY_STRING,
  errors: C.EMPTY_STRING,
  title: C.EMPTY_STRING
};

/**
 *
 */
const TextInput = (props) => {
  const { name, errors, value,title} = props;
  console.log(errors  );
  return (
    <div className="textquestion">
      <h5>
        <span className="title">{title}</span>
      </h5>
      <div className="wrap-input100 rs1 validate-input">
        <Field type="text" className="textinput" value={value} name={name} />
        {errors ? (
          <div className="alert-validate" data-validate={errors}></div>
        ) : (
          ""
        )}
        <span className="focus-input100-1" />
        <span className="focus-input100-2" />
      </div>
    </div>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
// #endregion

export default TextInput;
