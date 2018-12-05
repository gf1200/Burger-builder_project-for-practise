import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  mealsList: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MEALS_RECEIVED:
      return updateObject(state, { mealsList: action.meals });

    case actionTypes.GET_MEALS_ERROR:
      return updateObject(state, { error: true });

    default:
      return state;
  }
};

export default reducer;
