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
  export const updateAboutYouSuccess = aboutYou => {
    return {
      type: actionTypes.UPDATE_ABOUT_YOU_SUCCESS,
      aboutYou
    }
  }
  export const updatePart1Success = part1 => {
    return {
      type: actionTypes.UPDATE_PART1_SUCCESS,
      part1
    }
  }
  export const updatePart2Success = part2 => {
    return {
      type: actionTypes.UPDATE_PART2_SUCCESS,
      part2
    }
  }
  export const updatePart3Success = part3 => {
    return {
      type: actionTypes.UPDATE_PART3_SUCCESS,
      part3
    }
  }
  export const updatePart4Success = part4 => {
    return {
      type: actionTypes.UPDATE_PART4_SUCCESS,
      part4
    }
  }
  export const updatePart5Success = part5 => {
    return {
      type: actionTypes.UPDATE_PART5_SUCCESS,
      part5
    }
  }
  export const updatePart6Success = part6 => {
    return {
      type: actionTypes.UPDATE_PART6_SUCCESS,
      part6
    }
  }
  export const updatePart7Success = part7 => {
    return {
      type: actionTypes.UPDATE_PART7_SUCCESS,
      part7
    }
  }
  export const createSurvey = (data, history) => {
    return dispatch => {
      dispatch(surveyStart());
      API.post("/", data)
        .then(res => {
          if (res.data.newSurvey) {
            localStorage.setItem("id",res.data.newSurvey._id);
            history.push("/thongtincanhan");
            dispatch(createSurveySuccess(res.data.newSurvey));
          } else {
            dispatch(createSurveyFail(res.data.error))
          }
        })
        .catch(err => {
          dispatch(createSurveyFail(err));
        });
    };
  };

  export const aboutYou = (aboutYou, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/aboutyou/${id}`,aboutYou)
         .then(res => {
           dispatch(updateAboutYouSuccess(aboutYou));
           history.push("/part1")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }
  export const part1Survey = (part1, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/part1/${id}`, part1)
         .then(res => {
           dispatch(updatePart1Success(part1));
           history.push("/part2")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }
  export const part2Survey = (part2, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/part2/${id}`, part2)
         .then(res => {
           dispatch(updatePart2Success(part2));
           history.push("/part3")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }
  export const part3Survey = (part3, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/part3/${id}`, part3)
         .then(res => {
           dispatch(updatePart3Success(part3));
           history.push("/part4")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }
  export const part4Survey = (part4, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/part4/${id}`, part4)
         .then(res => {
           dispatch(updatePart4Success(part4));
           history.push("/part5")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }
  export const part5Survey = (part5, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/part5/${id}`, part5)
         .then(res => {
           dispatch(updatePart5Success(part5));
           history.push("/part6")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }

  export const part6Survey = (part6, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/part6/${id}`, part6)
         .then(res => {
           dispatch(updatePart6Success(part6));
           history.push("/part7")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }
  export const part7Survey = (part7, history)=> {
    return dispatch => {
      dispatch(surveyStart());
      let id = localStorage.getItem('id');
      API.put(`/part7/${id}`, part7)
         .then(res => {
           dispatch(updatePart7Success(part7));
           history.push("/thankyou")
         })
         .catch(err => {
           dispatch(surveyFail(err))
         })
    }
  }