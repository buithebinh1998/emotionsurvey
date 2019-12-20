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
    email: C.EMPTY_EMAIL,
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
  },
  loading: false,
  error: C.EMPTY_STRING
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
const updateAboutYouSuccess = (state, action) => {
  const { data } = state;
  data.name = action.aboutYou.name;
  data.age = action.aboutYou.age;
  data.gender = action.aboutYou.gender;
  data.qualification = action.aboutYou.qualification;
  data.job = action.aboutYou.job;
  data.email = action.aboutYou.email;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};
const updatePart1Success = (state, action) => {
  const { data } = state;
  data.part1 = action.part1;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};
const updatePart2Success = (state, action) => {
  const { data } = state;
  data.part2 = action.part2;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};
const updatePart3Success = (state, action) => {
  const { data } = state;
  data.part3 = action.part3;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};

const updatePart4Success = (state, action) => {
  const { data } = state;
  data.part4 = action.part4;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};
const updatePart5Success = (state, action) => {
  const { data } = state;
  data.part5 = action.part5;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};

const updatePart6Success = (state, action) => {
  const { data } = state;
  data.part6 = action.part6;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};

const updatePart7Success = (state, action) => {
  const { data } = state;
  data.part7 = action.part7;
  return updateObject(state, {
    data,
    loading: false,
    error: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_START:
      return surveyStart(state, action);
    case actionTypes.SURVEY_FAIL:
      return surveyFail(state, action);
    case actionTypes.CREATE_SURVEY_SUCCESS:
      return createSurveySuccess(state, action);
    case actionTypes.CREATE_SURVEY_FAIL:
      return createSurveyFail(state, action);
    case actionTypes.UPDATE_ABOUT_YOU_SUCCESS:
      return updateAboutYouSuccess(state, action);
    case actionTypes.UPDATE_PART1_SUCCESS:
      return updatePart1Success(state, action);
    case actionTypes.UPDATE_PART2_SUCCESS:
      return updatePart2Success(state, action);
    case actionTypes.UPDATE_PART3_SUCCESS:
      return updatePart3Success(state, action);
    case actionTypes.UPDATE_PART4_SUCCESS:
      return updatePart4Success(state, action);
    case actionTypes.UPDATE_PART5_SUCCESS:
      return updatePart5Success(state, action);
    case actionTypes.UPDATE_PART6_SUCCESS:
      return updatePart6Success(state, action);
    case actionTypes.UPDATE_PART7_SUCCESS:
      return updatePart7Success(state, action);
    default:
      return state;
  }
};

export default reducer;
