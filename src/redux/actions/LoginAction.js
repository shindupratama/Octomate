import {
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_FETCH_PROCESS,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAIL,
    LOGOUT_FETCH_PROCESS,
    LOGOUT_FETCH_SUCCESS,
    LOGOUT_FETCH_FAIL,
    CLEAR_LOGIN_ERROR
} from './types';

import Api from '../../api/Api';

let api = new Api();

export const loginEmailChanged = (email) => {
    return {
        type: LOGIN_EMAIL_CHANGED,
        payload: email
    };
};

export const loginPasswordChanged = (password) => {
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: password
    };
};

export const loginFetch = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_FETCH_PROCESS
        });
        let api = new Api();
        api.login(email, password)
        .then((response) => loginFetchSuccess(dispatch, response.data[0]))
        .catch((error) => loginFetchFailed(dispatch, error.response.data));
    };
};

const loginFetchSuccess = async (dispatch, data) => {
  let api = new Api();

  api.saveToken(data.associateAuthToken);

  dispatch({
    type: LOGIN_FETCH_SUCCESS,
    associateAuthToken: data.associateAuthToken,
    associateData: data.associateData,
    associateRefreshTokenState: data.associateRefreshTokenState
  });
};
  
const loginFetchFailed = (dispatch, error) => {
  dispatch({
    type: LOGIN_FETCH_FAIL,
    payload: error.message
  });
};

export const logoutFetch = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_FETCH_PROCESS
        });
        let api = new Api();
        api.logout()
        .then((response) => logoutFetchSuccess(dispatch, response.data))
        .catch((error) => logoutFetchFailed(dispatch, error.response));
    };
};

const logoutFetchSuccess = async (dispatch, logout) => {
  let api = new Api();

  api.deleteToken();
  
  dispatch({
    type: LOGOUT_FETCH_SUCCESS,
    payload: logout
  });
};
  
const logoutFetchFailed = (dispatch, error) => {
    dispatch({
      type: LOGOUT_FETCH_FAIL,
      payload: error
    });
  };

export const clearLoginError = () => {
  return {
    type: CLEAR_LOGIN_ERROR
  };
};