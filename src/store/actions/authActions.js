import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authLogout = () => ({ type: actionTypes.AUTH_LOGOUT });

const authRequest = () => {
  return { type: actionTypes.AUTH_REQUEST };
};

const authSucces = (idToken, userId) => {
  return { type: actionTypes.AUTH_SUCCES, idToken, userId };
};

const authFailure = error => {
  return { type: actionTypes.AUTH_FAILURE, error };
};

export const authRequestInit = (email, password, method) => {
  return dispatch => {
    dispatch(authRequest());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB_nvqcha9v4MNKGiReSexmGXzgHU4ocwA';

    if (method === 'login') {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB_nvqcha9v4MNKGiReSexmGXzgHU4ocwA`;
    }
    axios
      .post(url, authData)
      .then(response => {
        dispatch(authSucces(response.data.idToken, response.data.localId));
      })
      .catch(error => {
        dispatch(authFailure(error.response.data.error));
      });
  };
};
