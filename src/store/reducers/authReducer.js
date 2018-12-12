import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  userId: null,
  error: null,
  load: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return updateObject(state, { error: null, load: true });
    case actionTypes.AUTH_SUCCES:
      return updateObject(state, { token: action.idToken, userId: action.userId, error: null, load: false });
    case actionTypes.AUTH_FAILURE:
      return updateObject(state, { error: action.error, load: false });
    case actionTypes.AUTH_LOGOUT:
      return updateObject(state, { token: null, userId: null });
    default:
      return state;
  }
};

export default reducer;
