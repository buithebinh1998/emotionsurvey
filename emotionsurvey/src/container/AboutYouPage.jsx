import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFormik } from "formik";
import C from "../constants/constants";
import D from "../constants/dictionary";
import TextInput from "../component/TextInput/TextInput";
import RadioButton from "../component/RadioButton/RadioButton";
import ButtonSubmit from '../component/ButtonSubmit/ButtonSubmit';
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
            <RadioButton
              listData={D.emotion.aboutYou.yourgender.answer}
              name="yourgender"
              title={D.emotion.aboutYou.yourgender.question}
            />
            <RadioButton
              listData={D.emotion.aboutYou.yourage.answer}
              name="yourage"
              title={D.emotion.aboutYou.yourage.question}
            />
            <RadioButton
              listData={D.emotion.aboutYou.yourqualification.answer}
              name="yourqualification"
              title={D.emotion.aboutYou.yourqualification.question}
            />
            <RadioButton
              listData={D.emotion.aboutYou.yourjob.answer}
              name="yourjob"
              title={D.emotion.aboutYou.yourjob.question}
            />
            <ButtonSubmit title = {C.SURVEY.CONTINUE} />
          </form>
        </div>
      </>
    );
  }
}

const EnhancedForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    yourname: C.EMPTY_STRING,
    yourgender: C.EMPTY_STRING,
    yourage: C.EMPTY_STRING,
    yourqualification: C.EMPTY_STRING,
    yourjob: C.EMPTY_STRING
  }),
  //   validationSchema: formSchema,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 500);
  },
//   validate: values => {
//     const errors = {};
//     if (!values.gender) {
//       errors.gender = "Gender is required";
//     }
//     return errors;
//   }
});
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm(AboutYouPage));
