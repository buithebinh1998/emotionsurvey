import C from "../constants/constants";
import * as actionTypes from "../actions/actionType";
import { updateObject } from "./utility";
const initialState = {
  data: {
    name: C.EMPTY_DATA,
    age: C.EMPTY_DATA,
    gender: C.EMPTY_DATA,
    qualification: C.EMPTY_DATA,
    job: C.EMPTY_DATA,
    email: C.EMPTY_DATA,
    part1: {
      question1: C.EMPTY_DATA,
      question2: C.EMPTY_DATA,
      question3: C.EMPTY_DATA
    },
    part2: {
      question1: C.EMPTY_DATA,
      question2: C.EMPTY_DATA,
      question3: C.EMPTY_DATA
    },
    part3: {
      question1: C.EMPTY_DATA,
      question2: C.EMPTY_DATA,
      question3: C.EMPTY_DATA
    },
    part4: {
      question1: C.EMPTY_DATA,
      question2: C.EMPTY_DATA,
      question3: C.EMPTY_DATA
    },
    part5: {
      question1: C.EMPTY_DATA,
      question2: C.EMPTY_DATA,
      question3: C.EMPTY_DATA
    },
    part6: {
      question1: C.EMPTY_DATA,
      question2: C.EMPTY_DATA,
      question3: C.EMPTY_DATA
    },
    part7: {
      question1: C.EMPTY_DATA,
      question2: C.EMPTY_DATA,
      question3: C.EMPTY_DATA
    }
  }
};
const surveyStart = (state, action) => {
  return updateObject(state, { error: C.EMPTY_STRING, loading: true });
};
const surveyFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};
const createSurveySuccess = (state, action) => {
  return updateObject(state, {
    data: action.data,
    loading: false
  });
};
const createSurveyFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SURVEY_START:
            return surveyStart(state,action);
        case actionTypes.SURVEY_FAIL:
            return surveyFail(state,action);
        case actionTypes.CREATE_SURVEY_SUCCESS:
            return createSurveySuccess(state,action);
        case actionTypes.CREATE_SURVEY_FAIL:
            return createSurveyFail(state,action);
    }
}

export default reducer;