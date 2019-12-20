import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../component/Button/Button";
import D from "../constants/dictionary";
export class WelcomePage extends Component {
  onHandleClick = e => {
    const { history } = this.props;
    e.preventDefault();
    history.push("/gioithieu");
  };
  render() {
    return (
      <div className="welcome-container container">
        <h1>{D.emotion.title}</h1>
        <Button title="Bắt đầu khảo sát" clicked = {this.onHandleClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WelcomePage));
