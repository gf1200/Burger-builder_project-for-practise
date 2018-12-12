import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  keyPlan: null,
  error: null
};

const setCurrentPlanSucces = (state, action) => updateObject(state, { keyPlan: action.planKey, error: null });
const setCurrentPlanFailure = (state, action) => updateObject(state, { keyPlan: action.planKey, error: action.error });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PLAN_SUCCES:
      return setCurrentPlanSucces(state, action);
    case actionTypes.SET_CURRENT_PLAN_FAILURE:
      return setCurrentPlanFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
