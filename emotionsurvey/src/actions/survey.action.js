import * as actionTypes from "./actionType";
import { EvaluationAPI as API } from "../service/Evaluation.service";
import { GetToken } from "../util/GetToken";
export const surveyStart = () => {
  return {
    type: actionTypes.SURVEY_START
  };
};

export const surveyFail = error => {
  return {
    type: actionTypes.SURVEY_FAIL,
    error
  };
};
export const createSurveySuccess = data => {
  return {
    type: actionTypes.CREATE_SURVEY_SUCCESS,
    data
  };
};
export const createSurveyFail = error => {
  return {
    type: actionTypes.CREATE_SURVEY_FAIL,
    error
  };
};
export const surveyNameSuccess = name => {
  return {
    type: actionTypes.SURVEY_NAME_SUCCESS,
    name
  };
};
export const surveyAgeSuccess = age => {
  return {
    type: actionTypes.SURVEY_AGE_SUCCESS,
    age
  };
};

export const surveyCountrySuccess = country => {
  return {
    type: actionTypes.SURVEY_COUNTRY_SUCCESS,
    country
  };
};
export const surveyGenderSuccess = gender => {
  return {
    type: actionTypes.SURVEY_GENDER_SUCCESS,
    gender
  };
};
export const surveyAngryQuestion1Success = angryQuestion1 => {
  return {
    type: actionTypes.SURVEY_ANGRYQUESTION1_SUCCESS,
    angryQuestion1
  };
};
export const surveyAngryQuestion2Success = angryQuestion2 => {
  return {
    type: actionTypes.SURVEY_ANGRYQUESTION2_SUCCESS,
    angryQuestion2
  };
};
export const surveyAngryQuestion3Success = angryQuestion3 => {
  return {
    type: actionTypes.SURVEY_ANGRYQUESTION3_SUCCESS,
    angryQuestion3
  };
};
export const surveyAngryQuestion4Success = angryQuestion4 => {
  return {
    type: actionTypes.SURVEY_ANGRYQUESTION4_SUCCESS,
    angryQuestion4
  };
};
export const surveyDisgustingQuestion1Success = disgustingQuestion1 => {
  return {
    type: actionTypes.SURVEY_DISGUSTQUESTION1_SUCCESS,
    disgustingQuestion1
  };
};
export const surveyDisgustingQuestion2Success = disgustingQuestion2 => {
  return {
    type: actionTypes.SURVEY_DISGUSTQUESTION2_SUCCESS,
    disgustingQuestion2
  };
};
export const surveyDisgustingQuestion3Success = disgustingQuestion3 => {
  return {
    type: actionTypes.SURVEY_DISGUSTQUESTION3_SUCCESS,
    disgustingQuestion3
  };
};
export const surveyDisgustingQuestion4Success = disgustingQuestion4 => {
  return {
    type: actionTypes.SURVEY_DISGUSTQUESTION4_SUCCESS,
    disgustingQuestion4
  };
};
export const surveyHappyQuestion1Success = happyQuestion1 => {
  return {
    type: actionTypes.SURVEY_HAPPYQUESTION1_SUCCESS,
    happyQuestion1
  };
};
export const surveyHappyQuestion2Success = happyQuestion2 => {
  return {
    type: actionTypes.SURVEY_HAPPYQUESTION2_SUCCESS,
    happyQuestion2
  };
};
export const surveyHappyQuestion3Success = happyQuestion3 => {
  return {
    type: actionTypes.SURVEY_HAPPYQUESTION3_SUCCESS,
    happyQuestion3
  };
};
export const surveyHappyQuestion4Success = happyQuestion4 => {
  return {
    type: actionTypes.SURVEY_HAPPYQUESTION4_SUCCESS,
    happyQuestion4
  };
};
export const surveyScaredQuestion1Success = scaredQuestion1 => {
  return {
    type: actionTypes.SURVEY_SCAREDQUESTION1_SUCCESS,
    scaredQuestion1
  };
};
export const surveyScaredQuestion2Success = scaredQuestion2 => {
  return {
    type: actionTypes.SURVEY_SCAREDQUESTION2_SUCCESS,
    scaredQuestion2
  };
};
export const surveyScaredQuestion3Success = scaredQuestion3 => {
  return {
    type: actionTypes.SURVEY_SCAREDQUESTION3_SUCCESS,
    scaredQuestion3
  };
};
export const surveyScaredQuestion4Success = scaredQuestion4 => {
  return {
    type: actionTypes.SURVEY_SCAREDQUESTION4_SUCCESS,
    scaredQuestion4
  };
};
export const surveySadQuestion1Success = sadQuestion1 => {
  return {
    type: actionTypes.SURVEY_SADQUESTION1_SUCCESS,
    sadQuestion1
  };
};
export const surveySadQuestion2Success = sadQuestion2 => {
  return {
    type: actionTypes.SURVEY_SADQUESTION2_SUCCESS,
    sadQuestion2
  };
};
export const surveySadQuestion3Success = sadQuestion3 => {
  return {
    type: actionTypes.SURVEY_SADQUESTION3_SUCCESS,
    sadQuestion3
  };
};
export const surveySadQuestion4Success = sadQuestion4 => {
  return {
    type: actionTypes.SURVEY_SADQUESTION4_SUCCESS,
    sadQuestion4
  };
};
export const surveySupriseQuestion1Success = supriseQuestion1 => {
  return {
    type: actionTypes.SURVEY_SUPRISEQUESTION1_SUCCESS,
    supriseQuestion1
  };
};
export const surveySupriseQuestion2Success = supriseQuestion2 => {
  return {
    type: actionTypes.SURVEY_SUPRISEQUESTION2_SUCCESS,
    supriseQuestion2
  };
};
export const surveySupriseQuestion3Success = supriseQuestion3 => {
  return {
    type: actionTypes.SURVEY_SUPRISEQUESTION3_SUCCESS,
    supriseQuestion3
  };
};
export const surveySupriseQuestion4Success = supriseQuestion4 => {
  return {
    type: actionTypes.SURVEY_SUPRISEQUESTION4_SUCCESS,
    supriseQuestion4
  };
};
export const surveyInterestingQuestion1Success = interestingQuestion1 => {
  return {
    type: actionTypes.SURVEY_INRESTINGQUESTION1_SUCCESS,
    interestingQuestion1
  };
};
export const resetSurvey = () => {
  return {
    type: actionTypes.RESET_SURVEY
  };
};
export const createSurvey = (data, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.post("/", data, { headers: { Authorization: `${GetToken()}` } })
      .then(res => {
        if (res.data.survey) {
          dispatch(createSurveySuccess(res.data.survey));
        } else {
          dispatch(createSurveySuccess(data));
        }

        history.push("/yourname");
      })
      .catch(err => {
        dispatch(createSurveyFail(err));
      });
  };
};
export const surveyName = (name, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put("/name", { name }, { headers: { Authorization: `${GetToken()}` } })
      .then(res => {
        dispatch(surveyNameSuccess(name));
        history.push("/yourage");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyAge = (age, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put("/age", { age }, { headers: { Authorization: `${GetToken()}` } })
      .then(res => {
        dispatch(surveyAgeSuccess(age));
        history.push("/yourcountry");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyCountry = (country, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/country",
      { country },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyCountrySuccess(country));
        history.push("/yourgender");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyGender = (gender, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/gender",
      { gender },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyGenderSuccess(gender));
        history.push("/angryquestion1");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyAngryQuestion1 = (angryQuestion1, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/angryquestion1",
      { angryQuestion1 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyAngryQuestion1Success(angryQuestion1));
        history.push("/angryquestion2");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyAngryQuestion2 = (angryQuestion2, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/angryquestion2",
      { angryQuestion2 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyAngryQuestion2Success(angryQuestion2));
        history.push("/angryquestion3");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyAngryQuestion3 = (angryQuestion3, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/angryquestion3",
      { angryQuestion3 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyAngryQuestion3Success(angryQuestion3));
        history.push("/angryquestion4");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyAngryQuestion4 = (angryQuestion4, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/angryquestion4",
      { angryQuestion4 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyAngryQuestion4Success(angryQuestion4));
        history.push("/disgustingquestion1");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyDisgustingQuestion1 = (disgustingQuestion1, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/disgustingquestion1",
      { disgustingQuestion1 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyDisgustingQuestion1Success(disgustingQuestion1));
        history.push("/disgustingquestion2");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyDisgustingQuestion2 = (disgustingQuestion2, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/disgustingquestion2",
      { disgustingQuestion2 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyDisgustingQuestion2Success(disgustingQuestion2));
        history.push("/disgustingquestion3");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyDisgustingQuestion3 = (disgustingQuestion3, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/disgustingquestion3",
      { disgustingQuestion3 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyDisgustingQuestion3Success(disgustingQuestion3));
        history.push("/disgustingquestion4");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};

export const surveyDisgustingQuestion4 = (disgustingQuestion4, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/disgustingquestion4",
      { disgustingQuestion4 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyDisgustingQuestion4Success(disgustingQuestion4));
        history.push("/happyquestion1");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyHappyQuestion1 = (happyQuestion1, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/happyquestion1",
      { happyQuestion1 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyHappyQuestion1Success(happyQuestion1));
        history.push("/happyquestion2");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyHappyQuestion2 = (happyQuestion2, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/happyquestion2",
      { happyQuestion2 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyHappyQuestion2Success(happyQuestion2));
        history.push("/happyquestion3");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyHappyQuestion3 = (happyQuestion3, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/happyquestion3",
      { happyQuestion3 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyHappyQuestion3Success(happyQuestion3));
        history.push("/happyquestion4");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyHappyQuestion4 = (happyQuestion4, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/happyquestion4",
      { happyQuestion4 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyHappyQuestion4Success(happyQuestion4));
        history.push("/scaredquestion1");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyScaredQuestion1 = (scaredQuestion1, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/scaredquestion1",
      { scaredQuestion1 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyScaredQuestion1Success(scaredQuestion1));
        history.push("/scaredquestion2");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyScaredQuestion2 = (scaredQuestion2, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/scaredquestion2",
      { scaredQuestion2 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyScaredQuestion2Success(scaredQuestion2));
        history.push("/scaredquestion3");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyScaredQuestion3 = (scaredQuestion3, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/scaredquestion3",
      { scaredQuestion3 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyScaredQuestion3Success(scaredQuestion3));
        history.push("/scaredquestion4");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyScaredQuestion4 = (scaredQuestion4, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/scaredquestion4",
      { scaredQuestion4 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyScaredQuestion4Success(scaredQuestion4));
        history.push("/sadquestion1");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySadQuestion1 = (sadQuestion1, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/sadquestion1",
      { sadQuestion1 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySadQuestion1Success(sadQuestion1));
        history.push("/sadquestion2");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySadQuestion2 = (sadQuestion2, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/sadquestion2",
      { sadQuestion2 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySadQuestion2Success(sadQuestion2));
        history.push("/sadquestion3");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySadQuestion3 = (sadQuestion3, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/sadquestion3",
      { sadQuestion3 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySadQuestion3Success(sadQuestion3));
        history.push("/sadquestion4");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySadQuestion4 = (sadQuestion4, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/sadquestion4",
      { sadQuestion4 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySadQuestion4Success(sadQuestion4));
        history.push("/suprisequestion1");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySupriseQuestion1 = (supriseQuestion1, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/suprisequestion1",
      { supriseQuestion1 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySupriseQuestion1Success(supriseQuestion1));
        history.push("/suprisequestion2");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySupriseQuestion2 = (supriseQuestion2, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/suprisequestion2",
      { supriseQuestion2 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySupriseQuestion2Success(supriseQuestion2));
        history.push("/suprisequestion3");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySupriseQuestion3 = (supriseQuestion3, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/suprisequestion3",
      { supriseQuestion3 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySupriseQuestion3Success(supriseQuestion3));
        history.push("/suprisequestion4");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveySupriseQuestion4 = (supriseQuestion4, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/suprisequestion4",
      { supriseQuestion4 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveySupriseQuestion4Success(supriseQuestion4));
        history.push("/interestingquestion1");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
export const surveyInterestingQuestion1 = (interestingQuestion1, history) => {
  return dispatch => {
    dispatch(surveyStart());
    API.put(
      "/interestingquestion1",
      { interestingQuestion1 },
      { headers: { Authorization: `${GetToken()}` } }
    )
      .then(res => {
        dispatch(surveyInterestingQuestion1Success(interestingQuestion1));
        history.push("/thankyou");
      })
      .catch(err => {
        dispatch(surveyFail(err));
      });
  };
};
