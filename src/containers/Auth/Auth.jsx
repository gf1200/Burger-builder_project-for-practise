import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';

import Container from './../../components/UI/Container/Container';

class Auth extends Component {
	state = {
		controls: {
			email: {
				label: 'Email:',
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Mail Address'
				},
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				label: 'Password:',
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		}
	};

	checkValidity(value, rules) {
		let isValid = true;
		if (!rules) {
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(value) && isValid;
		}

		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid;
		}

		return isValid;
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(
					event.target.value,
					this.state.controls[controlName].validation
				),
				touched: true
			}
		};
		this.setState({ controls: updatedControls });
	};

	submitHandler = event => {
		event.preventDefault();
		this.props.onAuth(
			this.state.controls.email.value,
			this.state.controls.password.value,
			this.props.method
		);
	};

	render() {
		const { method, loading, error, isAuth } = this.props;

		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		let form = formElementsArray.map(formElement => (
			<Input
				label={formElement.config.label}
				key={formElement.id}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				changed={event => this.inputChangedHandler(event, formElement.id)}
			/>
		));

		let loadStatusBTNClass;
		if (loading) {
			loadStatusBTNClass = 'is-loading';
		}

		let errorMessage = null;
		if (error) {
			errorMessage = <div class='notification is-warning'>{error.message}</div>;
		}

		const btnName = method === 'login' ? 'LOG IN' : 'SING UP';

		return (
			<div className='hero is-large is-primary is-bold'>
				<div className='hero-body'>
					<Container>
						{isAuth ? <Redirect to='/' /> : null}
						<div className='columns is-centered'>
							<div className='column is-5-tablet is-4-desktop is-3-widescreen'>
								<div className='box'>
									{errorMessage}
									<form onSubmit={this.submitHandler}>
										{form}

										<div className='field'>
											<button
												className={`button  is-success ${loadStatusBTNClass}`}
											>
												{btnName}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.auth.load,
		error: state.auth.error,
		isAuth: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, method) => dispatch(actions.authRequestInit(email, password, method))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth);
