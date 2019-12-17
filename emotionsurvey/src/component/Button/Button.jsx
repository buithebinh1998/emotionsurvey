import React from 'react';
import './Button.component.scss';
import PropTypes from 'prop-types';

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region constants

// #endregion

// #region component
const propTypes = {
    clicked : PropTypes.func
};


const defaultProps = {
    clicked : fn()
};

/**
 * 
 */
const Button = (props) => {
    return(
        <div className="container">
            <a href="/" className="button" onClick = {props.clicked}></a>
        </div>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
// #endregion

export default Button;