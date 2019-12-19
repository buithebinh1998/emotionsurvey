import React from "react";
import "./RadioButton.component.scss";
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
  listData: PropTypes.array,
  name: PropTypes.string,
  title: PropTypes.string
};

const defaultProps = {
  listData: [],
  name: C.EMPTY_STRING,
  title: C.EMPTY_STRING
};

/**
 *
 */
const RadioButton = props => {
  const { listData, name, title } = props;
  const generatedKey = key => {
    return key;
  };
  const renderList = listData.map((data, idx) => {
    return (
      <div className="inputGroup" key={generatedKey(data.id) + idx}>
        <Field id={data.id} name={name} type="radio" value = {data.value}/>
        <label htmlFor={data.id}>{data.value}</label>
      </div>
    );
  });
  return (
    <div>
      <h5>{title}</h5>
      {renderList}
    </div>
  );
};

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
// #endregion

export default RadioButton;
