import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import C from "../constants/constants";
import D from "../constants/dictionary";
import TextInput from "../component/TextInput/TextInput";
import RadioButton from "../component/RadioButton/RadioButton";
import ButtonSubmit from "../component/ButtonSubmit/ButtonSubmit";
import * as actions from "../actions/index";
export class AboutYouPage extends Component {
  static propTypes = {
    values: PropTypes.object,
    errors: PropTypes.object,
    handleSubmit: PropTypes.func
  };

  render() {
    const { values, errors, handleSubmit } = this.props;
    return (
      <>
        <h2 className="titleAboutYou">Thông tin cá nhân</h2>
        <div className="container2 form">
          <form onSubmit={handleSubmit}>
            <TextInput
              name="yourname"
              value={values.yourname}
              errors={errors.yourname}
              title={D.emotion.aboutYou.yourname.question}
            />
            <TextInput
              name="youremail"
              value={values.youremail}
              errors={errors.youremail}
              title={D.emotion.aboutYou.youremail.question}
            />
            <RadioButton
              listData={D.emotion.aboutYou.yourgender.answer}
              name="yourgender"
              title={D.emotion.aboutYou.yourgender.question}
              errors={errors}
            />
            <RadioButton
              listData={D.emotion.aboutYou.yourage.answer}
              name="yourage"
              title={D.emotion.aboutYou.yourage.question}
              errors={errors}
            />
            <RadioButton
              listData={D.emotion.aboutYou.yourqualification.answer}
              name="yourqualification"
              title={D.emotion.aboutYou.yourqualification.question}
              errors={errors}
            />
            <RadioButton
              listData={D.emotion.aboutYou.yourjob.answer}
              name="yourjob"
              title={D.emotion.aboutYou.yourjob.question}
              errors={errors}
            />
            <ButtonSubmit title={C.SURVEY.CONTINUE} />
          </form>
        </div>
      </>
    );
  }
}
const formSchema = Yup.object().shape({
  youremail: Yup.string()
    .email(C.INVALID_EMAIL)
    .required(C.EMAIL_REQUIRED),
  yourname: Yup.string()
    .min(2, C.TOO_SHORT)
    .max(50, C.TOO_LONG)
    .required(C.NAME_REQUIRED),
  yourage: Yup.string().required(C.AGE_REQUIRED),
  yourjob: Yup.string().required(C.JOB_REQUIRED),
  yourqualification: Yup.string().required(C.QUALIFICATION_REQUIRED),
  yourgender: Yup.string().required(C.GENDER_REQUIRED)
});

const EnhancedForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    yourname: C.EMPTY_STRING,
    yourgender: C.EMPTY_STRING,
    yourage: C.EMPTY_STRING,
    youremail: C.EMPTY_STRING,
    yourqualification: C.EMPTY_STRING,
    yourjob: C.EMPTY_STRING
  }),
  validationSchema: formSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const { history, onUpdateAboutYou } = props;
    setTimeout(() => {
     let data = {
       name: values.yourname,
       age: values.yourage,
       gender: values.yourgender,
       email: values.youremail,
       qualification: values.yourqualification,
       job: values.yourjob
     }
      onUpdateAboutYou(data, history);
      setSubmitting(false);
    }, 500);
  }
});
const mapStateToProps = state => {
  return {
    loading: state.emotion.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateAboutYou: (aboutyou, history) =>
      dispatch(actions.aboutYou(aboutyou, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EnhancedForm(AboutYouPage)));
