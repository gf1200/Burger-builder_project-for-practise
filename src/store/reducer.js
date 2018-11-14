import * as actionTypes from './actions';

const initialState = {
  chosenMeals: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MEAL:
      const numberGen = Math.floor(Math.random() * 1000);
      const addNewMeal = {
        ...action.meal,
        id: action.meal.id + `##${numberGen}`
      };
      return {
        ...state,
        chosenMeals: [...state.chosenMeals, addNewMeal]
      };

    case actionTypes.REMOVE_MEAL:
      const chosenMeals = state.chosenMeals.filter(
        meal => meal.id !== action.id
      );
      return {
        ...state,
        chosenMeals
      };
    default:
      return state;
  }
};

export default reducer;
