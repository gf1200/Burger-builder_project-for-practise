import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import MealToChoose from './../../components/Menu/MealToChoose/MealToChoose';
import axios from '../../axios-meals';
import ModalCloseBTN from '../../components/UI/Modal/ModalCloseBTN';
import ModalFoter from '../../components/UI/Modal/ModalFoter';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import AddBTN from '../../components/UI/AddBTN/AddBTN';
import ChosenMeals from '../../components/Menu/ChosenMeals/ChosenMeals';
import TextInput from '../../components/UI/TextInput';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import InfoBox from '../../components/UI/InfoBox';

class NewPlanBuilder extends Component {
  state = {
    title: ''
  };

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  summaryHandler = () => {
    this.setState({ summaryOpened: true });
  };

  summaryClose = () => {
    this.setState({ summaryOpened: false });
  };

  componentDidMount() {
    const { token, userId } = this.props;
    this.props.loadMeals(userId, token);
  }

  render() {
    const {
      meals,
      onDeleteMeal,
      create,
      onAddMeal,
      createNewPlan,
      chosenMeals,
      mealsError,
      createError,
      userId,
      token
    } = this.props;
    const { title } = this.state;

    if (create || createError) {
      setTimeout(() => {
        this.props.initPlan();
        return this.props.history.push('/plans');
      }, 1600);
    }

    let mealToChoose = null;
    let mealsList = mealsError ? (
      <InfoBox color="red">
        <p>Meals can't be loaded!</p>
      </InfoBox>
    ) : (
      <Spiner />
    );

    if (meals) {
      mealToChoose = <MealToChoose chosen={chosenMeals} meals={meals} addMeal={onAddMeal} />;
      mealsList = (
        <React.Fragment>
          <br />
          <TextInput value={title} onChange={this.handleChangeTitle.bind(this)} />
          <ChosenMeals
            meals={chosenMeals}
            deleteMeal={onDeleteMeal}
            createClicked={() => createNewPlan(chosenMeals, title, userId, token)}
            createDisable={!chosenMeals.length || !title.length ? true : false}
          />
        </React.Fragment>
      );
    }

    if (this.props.loading || create) {
      mealsList = create ? (
        <InfoBox color="teal">
          <p>The plan has been saved in plans ...</p>
        </InfoBox>
      ) : (
        <Spiner />
      );
    }

    if (createError) {
      mealsList = (
        <InfoBox color="red">
          <p>The plan has't been saved ...</p>
        </InfoBox>
      );
    }

    return (
      <React.Fragment>
        {mealsList}
        <Modal modalType="bottom-sheet" modalId="modal1" whenClosed={this.summaryClose.bind(this)} isShow={true}>
          {mealToChoose}
          <ModalFoter>
            <ModalCloseBTN name="close" />
          </ModalFoter>
        </Modal>
        <AddBTN modalShow={this.summaryHandler} target="modal1" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    chosenMeals: state.newPlan.chosenMeals,
    create: state.newPlan.planCreated,
    loading: state.newPlan.loading,
    createError: state.newPlan.error,
    fetchError: state.meals.error,
    meals: state.meals.mealsList,
    mealsError: state.meals.error,
    token: state.auth.token,
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    initPlan: () => dispatch(actions.initPlan()),
    createNewPlan: (meals, title, userId, token) => dispatch(actions.setNewPlanData(meals, title, userId, token)),
    loadMeals: (userId, token) => dispatch(actions.getMealsData(userId, token)),
    onAddMeal: meal => dispatch(actions.addMeal(meal)),
    onDeleteMeal: index => dispatch(actions.removeMeal(index))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(NewPlanBuilder, axios));
