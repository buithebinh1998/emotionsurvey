import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Image from "../component/Image/Image";
import { withFormik } from "formik";
import * as Yup from "yup";
import * as actions from "../actions/index";
import RadioButton from "../component/RadioButton/RadioButton";
import D from "../constants/dictionary";
import C from "../constants/constants";
import ButtonSubmit from "../component/ButtonSubmit/ButtonSubmit";
export class Part3Page extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    onUpdatePart3: PropTypes.func
  };

  render() {
    const { errors, handleSubmit } = this.props;
    return (
    <>
    <h2 className="titleAboutYou">{D.emotion.survey.title}</h2>
      <div className="container2 form">
        <form onSubmit={handleSubmit}>
          <Image />
          <RadioButton
            listData={D.emotion.survey.part3.question1.answer}
            name="part3Question1"
            title = {D.emotion.survey.answer}
            errors = {errors}
          />
            <Image />
          <RadioButton
            listData={D.emotion.survey.part3.question2.answer}
            name="part3Question2"
            title = {D.emotion.survey.answer}
            errors = {errors}
          />
            <Image />
          <RadioButton
            listData={D.emotion.survey.part3.question3.answer}
            name="part3Question3"
            title = {D.emotion.survey.answer}
            errors = {errors}
          />
          <ButtonSubmit title = {C.SURVEY.CONTINUE}/>
        </form>
      </div>
      </>
    );
   
  }
}

const mapStateToProps = state => {
  return {
    loading: state.emotion.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePart3: (part3, history) =>
      dispatch(actions.part3Survey(part3, history))
  };
};
const formSchema = Yup.object().shape({
  part3Question1: Yup.string().required(""),
  part3Question2: Yup.string().required(""),
  part3Question3: Yup.string().required("")
});
const EnhancedForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    part3Question1: C.EMPTY_STRING,
    part3Question2: C.EMPTY_STRING,
    part3Question3: C.EMPTY_STRING
  }),
  validationSchema: formSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const { history, onUpdatePart3 } = props;
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      onUpdatePart3(values, history);
      setSubmitting(false);
      resetForm();
    }, 500);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm(Part3Page));
