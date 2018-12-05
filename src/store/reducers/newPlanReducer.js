import * as actionTypes from '../actions/actionTypes';
import { updateObject, addItem, removeItem } from '../utility';

const initialState = {
  chosenMeals: [],
  loading: false,
  planCreated: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PLAN:
      return updateObject(state, {
        chosenMeals: [],
        loading: false,
        planCreated: false,
        error: false
      });

    case actionTypes.ADD_MEAL:
      return updateObject(state, {
        chosenMeals: addItem(state.chosenMeals, action.meal)
      });

    case actionTypes.REMOVE_MEAL:
      return updateObject(state, {
        chosenMeals: removeItem(state.chosenMeals, action)
      });

    case actionTypes.SET_NEW_PLAN_RECEIVED:
      return updateObject(state, { planCreated: true, loading: false });

    case actionTypes.SET_NEW_PLAN_ERROR:
      return updateObject(state, { error: true, loading: false });

    case actionTypes.CREATE_NEW_PLAN_LOAD:
      return updateObject(state, { loading: action.load });

    default:
      return state;
  }
};

export default reducer;
