import React from "react";
import PropTypes from "prop-types";
import D from "../../constants/dictionary";
import C from '../../constants/constants';
import "./Image.component.scss";
import ContentLoader from 'react-content-loader'


const propTypes = {
    imgLink: PropTypes.string
  };
  
  const defaultProps = {
    imgLink: C.EMPTY_STRING
  };
const MyLoader = () => (
    <ContentLoader>
    <rect x="25%" y="0" rx="5" ry="5" width="200" height="400" />
    </ContentLoader>
  );
  
const Image = props => {
  const [loadImage,setLoad] = React.useState(true)
  const { imgLink } = props;
  const handleLoadImage = () => {
    setLoad(false);
  }
  return (
    <div className = "content-image">
      <h5>{D.emotion.survey.question}</h5>
      {loadImage ?<MyLoader /> : C.EMPTY_STRING }
     <img  className = "image" src={`https://drive.google.com/uc?export=view&id=${imgLink}`} alt={imgLink} onLoad = {handleLoadImage} />  
    </div>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
