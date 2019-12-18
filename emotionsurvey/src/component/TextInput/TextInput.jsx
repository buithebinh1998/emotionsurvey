import React from 'react';
import "./TextInput.component.scss";
import PropTypes from 'prop-types';

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region constants

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const TextInput = () => {
    const {
        name,
        type,
        onValueChange,
        errors,
        onHandleBlur,
        onHandleFocus,
        value,
      } = props;
    const handleChange = e => {
        onValueChange(e.target.value);
    }
    const handleBlur = props => {
        onHandleBlur();
    }
    return (
    <div className="textquestion">
        <h5>
          <span className="title">{props.title}</span>
        </h5>
        <div className="wrap-input100 rs1 validate-input">
          <input
            type={type}
            className="textinput"
            value={value}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {errors ? (
            <div className="alert-validate" data-validate={errors}></div>
          ) : (
            ""
          )}
          <span className="focus-input100-1" />
          <span className="focus-input100-2" />
        </div>
      </div>
    )
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
// #endregion

export default TextInput;


