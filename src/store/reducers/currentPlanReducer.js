import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  keyPlan: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PLAN:
      return updateObject(state, { keyPlan: action.planKey });

    default:
      return state;
  }
};

export default reducer;
