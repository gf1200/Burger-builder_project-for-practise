import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  keyPlan: null
};

const setCurrentPlanSucces = (state, action) => updateObject(state, { keyPlan: action.planKey });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PLAN_SUCCES:
      return setCurrentPlanSucces(state, action);
    default:
      return state;
  }
};

export default reducer;
