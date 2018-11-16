import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  listOfPlans: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PLAN:
      return updateObject(state, {});

    case actionTypes.SET_PLANS:
      return updateObject(state, { listOfPlans: action.listOfPlans });
    case actionTypes.FETCH_PLANS_FAILD:
      return updateObject(state, { error: true });

    default:
      return state;
  }
};

export default reducer;
