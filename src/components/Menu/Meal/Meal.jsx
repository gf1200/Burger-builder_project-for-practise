import React, { Component } from "react";
import PropTypes from "prop-types";

class Meal extends Component {
  render() {
    let meal = null;

    switch (this.props.type) {
      case "breakfast":
        meal = <li className="collection-item">breakfast</li>;
        break;

      case "lunch":
        meal = <li className="collection-item">lunch</li>;
        break;

      case "supper":
        meal = <li className="collection-item">supper</li>;
        break;

      default:
        meal = null;
    }
    return meal;
  }
}

Meal.propTypes = {
  type: PropTypes.string.isRequired
};
export default Meal;
