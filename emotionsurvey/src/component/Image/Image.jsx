import React from "react";
import PropTypes from "prop-types";
import D from "../../constants/dictionary";
import C from '../../constants/constants';
const propTypes = {
    imgLink: PropTypes.string
  };
  
  const defaultProps = {
    imgLink: C.EMPTY_STRING
  };
  
const Image = props => {
  const { imgLink } = props;
  return (
    <div>
      <img src={imgLink} alt={imgLink} />
      <h5>{D.emotion.survey.question}</h5>
    </div>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
