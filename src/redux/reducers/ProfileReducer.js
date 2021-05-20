import {
  PROFILE_ANNOUNCEMENTS_FETCH_PROCESS,
  PROFILE_ANNOUNCEMENTS_FETCH_SUCCESS,
  PROFILE_ANNOUNCEMENTS_FETCH_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: '',
    id: '',
    email: '',
    password: '',
    associateData: '',
    user: '',
    token: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PROFILE_ANNOUNCEMENTS_FETCH_PROCESS:
      return {...state, loading: true, error: ''}
    case PROFILE_ANNOUNCEMENTS_FETCH_SUCCESS:
      return {...state, loading: false, error: '', associateData: action.payload, token: action.token}
    case PROFILE_ANNOUNCEMENTS_FETCH_FAILED:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  };
};