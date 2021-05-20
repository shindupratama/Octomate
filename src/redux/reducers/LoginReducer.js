import {
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_FETCH_PROCESS,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAILED,
    LOGOUT_FETCH_PROCESS,
    LOGOUT_FETCH_SUCCESS,
    LOGOUT_FETCH_FAILED,
    CLEAR_LOGIN_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: '',
    email: '',
    password: '',
    associateData: '',
    associateRefreshTokenState: '',
    associateAuthToken: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_EMAIL_CHANGED:
            return {...state, email: action.payload};
        case LOGIN_PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_FETCH_PROCESS:
            return {...state, loading: true, error: ''}
        case LOGIN_FETCH_SUCCESS:
            return {...state, loading: false, error: '', associateData: action.associateData, associateAuthToken: action.associateAuthToken}
        case LOGIN_FETCH_FAILED:
            return {...state, loading: false, error: action.payload}
        case LOGOUT_FETCH_PROCESS:
            return {...state, loading: true, error: ''}
        case LOGOUT_FETCH_SUCCESS:
            return {...state, loading: false, error: '', associateAuthToken: null}
        case LOGOUT_FETCH_FAILED:
            return {...state, loading: false, error: action.payload}
        case CLEAR_LOGIN_ERROR:
            return {...state, error: ''}
        default:
            return state;
    };
};