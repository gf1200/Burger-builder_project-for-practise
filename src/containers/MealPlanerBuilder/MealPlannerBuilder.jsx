import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import BuildControls from '../../components/Menu/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import MealSummery from './../../components/Menu/MealSummery/MealSummery';

import axios from '../../axios-orders';
import ModalCloseBTN from '../../components/UI/Modal/ModalCloseBTN';
import ModalFoter from '../../components/UI/Modal/ModalFoter';
import PrimaryBTN from '../../components/UI/PrimaryBTN';
import Spiner from './../../components/UI/Spiner';

class MealPlannerBuilder extends Component {
  state = {
    meals: {
      breakfast: 0,
      lunch: 0,
      supper: 0
    },
    totalMeals: 0,
    summaryDisabld: false,
    summaryOpened: false,
    loading: false
  };

  confirmMealPlan = () => {
    this.setState({ loading: true });
    const plan = {
      meals: this.state.meals,
      customer: {
        name: 'John Don',
        adress: {
          street: 'Krakowska 1',
          zipCode: '30-000',
          cuntry: 'Polska'
        },
        email: 'john_d@gmail.com'
      },
      delivery: 'fastest'
    };

    axios
      .post('orders.json', plan)
      .then(response => this.setState({ loading: false }))
      .catch(err => this.setState({ loading: false }));
  };

  summaryHandler = () => {
    this.setState({ summaryOpened: true });
  };

  summaryClose = () => {
    this.setState({ summaryOpened: false });
  };
  updateConfirmBtn = meals => {
    const sum = Object.keys(meals)
      .map(mealKey => {
        return meals[mealKey];
      })
      .reduce((sum, next) => {
        return sum + next;
      }, 0);

    this.setState({ confirmeDisabld: sum > 0 });
  };

  addMealHandler = type => {
    const updateCount = this.state.meals[type] + 1;
    const updateMeals = {
      ...this.state.meals
    };
    updateMeals[type] = updateCount;
    const amountAddition = this.state.totalMeals + 1;
    this.setState({ totalMeals: amountAddition, meals: updateMeals });
    this.updateConfirmBtn(updateMeals);
  };

  removeMealHandler = type => {
    const oldCount = this.state.meals[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateMeals = {
      ...this.state.meals
    };
    updateMeals[type] = updateCount;
    const amountDeduction = this.state.totalMeals - 1;
    this.setState({ totalMeals: amountDeduction, meals: updateMeals });
    this.updateConfirmBtn(updateMeals);
  };

  render() {
    const disableInfo = {
      ...this.state.meals
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let mealSummery = <MealSummery meals={this.state.meals} />;
    if (this.state.loading) {
      mealSummery = <Spiner />;
    }

    return (
      <React.Fragment>
        <Modal
          modalId="modal1"
          whenClosed={this.summaryClose.bind(this)}
          isShow={this.state.summaryOpened}
        >
          {mealSummery}
          <ModalFoter>
            <ModalCloseBTN name="close" />
            <PrimaryBTN
              name="confirm plan"
              whenClicked={this.confirmMealPlan}
            />
          </ModalFoter>
        </Modal>

        <Menu meals={this.state.meals} totalMeals={this.state.totalMeals} />
        <BuildControls
          mealeAdded={this.addMealHandler}
          mealRemoved={this.removeMealHandler}
          disabld={disableInfo}
          confirmDisabld={this.state.confirmeDisabld}
          target="modal1"
          modalShow={this.summaryHandler}
        />
      </React.Fragment>
    );
  }
}

export default MealPlannerBuilder;
