import React, { Component } from 'react';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import ToolbarNav from '../../components/Navigation/ToolbarNav/ToolbarNav';
import NavigatIonItems from '../../components/Navigation/NavigationItems/NavigatIonItems';
import { connect } from 'react-redux';
import Footer from '../../components/Footer/Footer';

export class Layout extends Component {
	render() {
		const { children, isAuth } = this.props;
		return (
			<>
				<Toolbar>
					<ToolbarNav>
						<NavigatIonItems isAuth={isAuth} />
					</ToolbarNav>
				</Toolbar>

				{children}

				<Footer />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.token !== null
	};
};
export default connect(mapStateToProps)(Layout);
