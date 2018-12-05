import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  listOfPlans: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLANS_RECEIVED:
      return updateObject(state, { listOfPlans: action.listOfPlans });

    case actionTypes.GET_PLANS_ERROR:
      return updateObject(state, { error: true });

    default:
      return state;
  }
};

export default reducer;
