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
            <Image imgLink={D.emotion.survey.part3.question1.imgLink} />
            <RadioButton
              listData={D.emotion.survey.part3.question1.answer}
              name="part3Question1"
              title={D.emotion.survey.answer}
              errors={errors}
            />
            <Image imgLink={D.emotion.survey.part3.question2.imgLink} />
            <RadioButton
              listData={D.emotion.survey.part3.question2.answer}
              name="part3Question2"
              title={D.emotion.survey.answer}
              errors={errors}
            />
            <Image imgLink={D.emotion.survey.part3.question3.imgLink} />
            <RadioButton
              listData={D.emotion.survey.part3.question3.answer}
              name="part3Question3"
              title={D.emotion.survey.answer}
              errors={errors}
            />
            <ButtonSubmit title={C.SURVEY.CONTINUE} />
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
  part3Question1: Yup.string().required(C.EMOTION_REQUIRED),
  part3Question2: Yup.string().required(C.EMOTION_REQUIRED),
  part3Question3: Yup.string().required(C.EMOTION_REQUIRED)
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
    let part3 = {
      question1: values.part3Question1,
      question2: values.part3Question2,
      question3: values.part3Question3
    };
    let data = {
      part3
    };
    setTimeout(() => {
      onUpdatePart3(data, history);
      setSubmitting(false);
      resetForm();
    }, 500);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm(Part3Page));
