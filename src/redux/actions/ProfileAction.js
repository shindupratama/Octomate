import {
  PROFILE_ANNOUNCEMENTS_FETCH_PROCESS,
  PROFILE_ANNOUNCEMENTS_FETCH_SUCCESS,
  PROFILE_ANNOUNCEMENTS_FETCH_FAILED,
} from './types';

import Api from '../../api/Api';

let api = new Api();

export const profileAnnouncementsFetch = () => {
  return (dispatch) => {
      dispatch({
          type: PROFILE_ANNOUNCEMENTS_FETCH_PROCESS
      });
      let api = new Api();
      api.testAnnouncement()
      .then((response) => {
        console.log('response profile', response)
        profileAnnouncementsFetchSuccess(dispatch, response.data)})
      .catch((error) => {
        console.log('error profile', error)
        profileAnnouncementsFetchFailed(dispatch, error.response)});
  };
};

const profileAnnouncementsFetchSuccess = (dispatch, data) => {
  dispatch({
    type: PROFILE_ANNOUNCEMENTS_FETCH_SUCCESS,
    payload: data.data
  });
};

const profileAnnouncementsFetchFailed = (dispatch, error) => {
  dispatch({
    type: PROFILE_ANNOUNCEMENTS_FETCH_FAILED,
    payload: error
  });
};