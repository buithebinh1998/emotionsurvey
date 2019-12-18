import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import D from "../constants/dictionary";
import { withRouter } from "react-router-dom";
import Button from '../component/Button/Button';
export class IntroducePage extends Component {
  static propTypes = {
    prop: PropTypes
  };
  onHandleClick = e => {
    const { history } = this.props;
    e.preventDefault();
    history.push("/thongtincanhan");
  };
  render() {
    return (
      <div className="container introduce-container">
        <div className="content">
          <h1 className="content-title">{D.emotion.introduce.title}</h1>
          <div className="content-description">
            <p>{D.emotion.introduce.aboutMe}</p>
            <p>{D.emotion.introduce.description}</p>
            <p>{D.emotion.introduce.thankforSurvey}</p>
          </div>
          <Button title = "Tiếp tục nào" clicked = {this.onHandleClick}  />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IntroducePage))