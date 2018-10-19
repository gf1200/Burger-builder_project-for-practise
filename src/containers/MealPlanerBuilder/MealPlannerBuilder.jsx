import React, { Component } from "react";
import Aux from "./../../hoc/ReactAux";
import Menu from "../../components/Menu/Menu";

class MealPlannerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Menu />
        <div>Meal plan controler</div>
      </Aux>
    );
  }
}

export default MealPlannerBuilder;
