import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  login : LoginReducer,
  profile : ProfileReducer
});