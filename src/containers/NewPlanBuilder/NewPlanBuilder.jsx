import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import MealToChoose from './../../components/Menu/MealToChoose/MealToChoose';
import axios from '../../axios-orders';
import ModalCloseBTN from '../../components/UI/Modal/ModalCloseBTN';
import ModalFoter from '../../components/UI/Modal/ModalFoter';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import AddBTN from '../../components/UI/AddBTN/AddBTN';
import ChosenMeals from '../../components/Menu/ChosenMeals/ChosenMeals';
import TextInput from '../../components/UI/TextInput';

class NewPlanBuilder extends Component {
  state = {
    title: '',
    chosenMeals: [],
    meals: null,
    totalMeals: 0,
    summaryDisabld: false,
    summaryOpened: false,
    loading: false,
    error: false
  };

  onAddMeal(meal) {
    this.setState(state => {
      const numberGen = Math.floor(Math.random() * 100);
      const addNewMeal = {
        ...meal,
        id: meal.id + `__${numberGen}`
      };
      const chosenMeals = [...state.chosenMeals, addNewMeal];
      return { chosenMeals };
    });
  }

  onDeleteMeal(id) {
    this.setState(state => {
      const chosenMeals = state.chosenMeals.filter(meal => meal.id !== id);
      return { chosenMeals };
    });
  }

  onCreatePlan() {
    this.props.history.push('/current');
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get('meals-2.json')
      .then(res => {
        const meals = [];
        for (let key in res.data) {
          meals.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ meals, loading: false });
      })
      .catch(error => this.setState({ error: true }));
  }

  // confirmMealPlan = () => {
  //   this.setState({ loading: true });
  //   const plan = {
  //     meals: this.state.meals,
  //     customer: {
  //       name: 'John Don',
  //       adress: {
  //         street: 'Krakowska 1',
  //         zipCode: '30-000',
  //         cuntry: 'Polska'
  //       },
  //       email: 'john_d@gmail.com'
  //     },
  //     delivery: 'fastest'
  //   };

  //   axios
  //     .post('orders.json', plan)
  //     .then(response => this.setState({ loading: false }))
  //     .catch(err => this.setState({ loading: false }));
  // };

  summaryHandler = () => {
    this.setState({ summaryOpened: true });
  };

  summaryClose = () => {
    this.setState({ summaryOpened: false });
  };

  render() {
    const mealsAlreadyChosen = [...this.state.chosenMeals].map(meal =>
      meal.id.split('__').slice(0, 1)
    );
    let mealToChoose = null;
    let meals = this.state.error ? <p>Meals can't be loaded!</p> : <Spiner />;

    if (this.state.meals) {
      mealToChoose = (
        <MealToChoose
          alredyChosen={mealsAlreadyChosen}
          meals={this.state.meals}
          addMeal={this.onAddMeal.bind(this)}
        />
      );
      meals = (
        <React.Fragment>
          <br />
          <TextInput
            value={this.state.title}
            onChange={this.handleChangeTitle.bind(this)}
          />
          <ChosenMeals
            meals={this.state.chosenMeals}
            deleteMeal={this.onDeleteMeal.bind(this)}
            createClicked={this.onCreatePlan.bind(this)}
            createDisable={
              !this.state.chosenMeals.length || !this.state.title.length
                ? true
                : false
            }
          />
          {/* <Menu meals={this.state.meals} totalMeals={this.state.totalMeals} /> */}
          {/* <BuildControls
            mealeAdded={this.addMealHandler}
            mealRemoved={this.removeMealHandler}
            disabld={disableInfo}
            confirmDisabld={this.state.confirmeDisabld}
            target="modal2"
          /> */}
        </React.Fragment>
      );
    }

    if (this.state.loading) {
      mealToChoose = <Spiner />;
    }

    return (
      <React.Fragment>
        <Modal
          modalType="bottom-sheet"
          modalId="modal1"
          whenClosed={this.summaryClose.bind(this)}
          isShow={true}
        >
          {mealToChoose}
          <ModalFoter>
            <ModalCloseBTN name="close" />
          </ModalFoter>
        </Modal>

        {meals}
        <AddBTN modalShow={this.summaryHandler} target="modal1" />
      </React.Fragment>
    );
  }
}

export default withErrorHandler(NewPlanBuilder, axios);
