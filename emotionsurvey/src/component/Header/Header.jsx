import React from 'react';
import Logo from '../../assets/img/logo.png';
import "./Header.component.scss";
const propTypes = {};

const defaultProps = {};
const Header = props => {
    return (
        <>
        <header className="sc-header">
          <div className="sc-item sc-logo">
            <img src={Logo} alt="Logo" />
          </div>
        </header>
      </>
    )
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header
