import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  mealsList: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MEALS:
      return updateObject(state, { mealsList: action.meals });

    case actionTypes.FETCH_MEALS_FAILD:
      return updateObject(state, { error: true });

    default:
      return state;
  }
};

export default reducer;
