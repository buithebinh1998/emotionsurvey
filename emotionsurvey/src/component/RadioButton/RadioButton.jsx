import React from "react";
import './RadioButton.component.scss';
import PropTypes from "prop-types";

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region constants

// #endregion

// #region component
const propTypes = {
  listData: PropTypes.array
};

const defaultProps = {
  listData: []
};

/**
 *
 */
const RadioButton = props => {
  const { listData } = props;
  const generatedKey = (key) => {
    return key 
  };
  const renderList = listData.map((data, idx) => {
    return (
      <div className="inputGroup" key={generatedKey(data.id)+idx}>
        <input id={data.id} name="radio" type="radio" />
        <label htmlFor={data.id}>{data.value}</label>
      </div>
    );
  });
  return <div>{renderList}</div>;
};

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
// #endregion

export default RadioButton;
