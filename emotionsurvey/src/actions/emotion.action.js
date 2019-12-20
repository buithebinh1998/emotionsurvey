import * as actionTypes from "./actionType";
import { EmotionAPI as API } from "../service/Emotion.service";

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

  export const createSurvey = (data, history) => {
    return dispatch => {
      dispatch(surveyStart());
      API.post("/", data)
        .then(res => {
          if (res.data.survey) {
            dispatch(createSurveySuccess(res.data.survey));
          } else {
            dispatch(createSurveySuccess(data));
          }
          localStorage.setItem("id",res.data.survey._id);
          history.push("/thongtincanhan");
        })
        .catch(err => {
          dispatch(createSurveyFail(err));
        });
    };
  };