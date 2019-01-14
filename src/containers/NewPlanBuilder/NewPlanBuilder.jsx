import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import MealToChoose from './../../components/Menu/MealToChoose/MealToChoose';
import axios from '../../axios-meals';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import ChosenMeals from '../../components/Menu/ChosenMeals/ChosenMeals';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Container from '../../components/UI/Container/Container';

class NewPlanBuilder extends Component {
	state = {
		newPlanTitle: '',
		isModalOpen: false
	};

	handleModalOpen = () => {
		this.setState({
			...this.state,
			isModalOpen: !this.state.isModalOpen
		});
	};

	handleChangeTitle(e) {
		this.setState({ newPlanTitle: e.target.value });
	}

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
			token,
			loading
		} = this.props;
		const { newPlanTitle, isModalOpen } = this.state;

		if (create || createError) {
			setTimeout(() => {
				this.props.initPlan();
				return this.props.history.push('/plans');
			}, 1600);
		}

		let mealToChoose = null;
		let mealsList = mealsError ? (
			<div className='notification is-danger'>
				<p>Meals can't be loaded!</p>
			</div>
		) : (
			<Spiner />
		);

		let createPlanBtnClassName = 'button is-primary is-uppercase is-fullwidth';
		if (loading) {
			createPlanBtnClassName = `${createPlanBtnClassName} is-loading`;
		}

		if (meals) {
			mealToChoose = <MealToChoose chosen={chosenMeals} meals={meals} addMeal={onAddMeal} />;
			mealsList = (
				<div class='box'>
					<div className='level'>
						<div className='level-left'>
							<div className='field'>
								<input
									placeholder='Plan title'
									type='text'
									value={newPlanTitle}
									className='input'
									onChange={this.handleChangeTitle.bind(this)}
								/>
							</div>
						</div>
						<div className='level-right'>
							<button
								className='button open-modal-button is-primary is-outlined is-fullwidth is-uppercase'
								onClick={this.handleModalOpen}
							>
								Add meals
							</button>
						</div>
					</div>
					<div className='columns is-multiline is-centered'>
						<div className='column is-12'>
							<ChosenMeals meals={chosenMeals} deleteMeal={onDeleteMeal} />
						</div>
						<div className='column is-half'>
							<div className='field '>
								<button
									href='#!'
									className={createPlanBtnClassName}
									onClick={() =>
										createNewPlan(
											chosenMeals,
											newPlanTitle,
											userId,
											token
										)
									}
									disabled={
										!chosenMeals.length || !newPlanTitle.length
											? true
											: false
									}
								>
									Create new plan
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		}

		if (create) {
			mealsList = (
				<div className='notification is-success'>
					<p>The plan has been saved in plans ...</p>
				</div>
			);
		}

		if (createError) {
			mealsList = (
				<div className='notification is-danger'>
					<p>The plan has't been saved ...</p>
				</div>
			);
		}

		return (
			<section className='section'>
				<Container>
					<h1 className='title'>Set up a new plan</h1>
					{mealsList}
					<Modal open={isModalOpen} close={this.handleModalOpen.bind(this)}>
						<div className='box'> {mealToChoose}</div>
					</Modal>
				</Container>
			</section>
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
		createNewPlan: (meals, newPlanTitle, userId, token) =>
			dispatch(actions.setNewPlanData(meals, newPlanTitle, userId, token)),
		loadMeals: (userId, token) => dispatch(actions.getMealsData(userId, token)),
		onAddMeal: meal => dispatch(actions.addMeal(meal)),
		onDeleteMeal: index => dispatch(actions.removeMeal(index))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(NewPlanBuilder, axios));
