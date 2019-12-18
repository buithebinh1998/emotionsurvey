import { OAuthAPI as API } from "../service/AuthenticationAPI.service";
import * as jwtDecode from "jwt-decode";
import * as actionTypes from "./actionType";
import { C } from "../constants/index";
import swal from "sweetalert";
import { resetSurvey } from "./survey.action";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS
  };
};
export const handleShowHidePassword = () => {
  return {
    type: actionTypes.HANDLE_SHOW_PASSWORD
  };
};
export const onShowPassword = () => {
  return {
    type: actionTypes.HANDLE_SHOW_PASSWORD
  };
};

export const onHidePassword = () => {
  return {
    type: actionTypes.HANDLE_HIDE_PASSWORD
  };
};

export const register = (email, password, history, resetForm) => {
  return dispatch => {
    dispatch(authStart());
    API.post("/signup", {
      email,
      password
    })
      .then(res => {
        if (res.data.error) {
          swal({
            title: "Error!",
            text: res.data.error,
            icon: "error",
            timer: 2000,
            button: false
          });
          dispatch(authFail(res.data.error));
        } else {
          swal({
            title: "Done!",
            text: res.data.message,
            icon: "success",
            timer: 2000,
            button: false
          });

          resetForm();
          dispatch(registerSuccess());
          history.push("/login");
        }
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const auth = (email, password, history, resetForm) => {
  return dispatch => {
    dispatch(authStart());
    API.post("/signin", {
      email,
      password
    })
      .then(res => {
        if (res.data.error) {
          swal({
            title: "Error!",
            text: res.data.error,
            icon: "error",
            timer: 2000,
            button: false
          });
        } else {
          const { token } = res.data;
          const userId = jwtDecode(token)._id;
          localStorage.setItem("userToken", token);
          dispatch(authSuccess(token, userId));
          swal({
            title: "Done!",
            text: "Login Successfully!",
            icon: "success",
            timer: 2000,
            button: false
          });
          history.push("/welcome");
          resetForm();
        }
      })
      .catch(err => {
        if (err) {
          swal({
            title: "Error!",
            text: err ? err.response.data.error : C.EMPTY_STRING,
            icon: "error",
            timer: 2000,
            button: false
          });

          dispatch(authFail(err));
        }
      });
  };
};
export const logoutSuccess = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
export const logout = () => {
  return dispatch => {
    localStorage.removeItem(C.LOCAL_STORAGE);
    localStorage.removeItem("userToken");
    dispatch(resetSurvey());
    dispatch(logoutSuccess());
  };
};
