import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import D from "../constants/dictionary";
import { withRouter } from "react-router-dom";
import Button from "../component/Button/Button";
import * as actions from "../actions/index";
export class IntroducePage extends Component {
  static propTypes = {
    onCreateSurvey: PropTypes.func,
    data: PropTypes.object,
    loading: PropTypes.bool
  };
  onHandleClick = e => {
    const { history, onCreateSurvey, data } = this.props;
    console.log(history);
    e.preventDefault();
    onCreateSurvey(data, history);
  };
  render() {
    const {loading} = this.props;
    return (
      <div className="container introduce-container">
        <div className="content">
          <h1 className="content-title">{D.emotion.introduce.title}</h1>
          <div className="content-description">
            <p>{D.emotion.introduce.aboutMe}</p>
            <p>{D.emotion.introduce.description}</p>
            <p>{D.emotion.introduce.thankforSurvey}</p>
          </div>
          <Button title="Tiếp tục nào" clicked={this.onHandleClick} disabled = {loading} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.emotion.data,
    loading: state.emotion.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateSurvey: (data, history) =>
      dispatch(actions.createSurvey(data, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IntroducePage));
