import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../../../_helpers";
import { AuthPortal, HomePage, Layout } from "../";
import { withAuthentication } from "../../components/hoc/";

class App extends Component {
	constructor ( props ) {
		super( props );

		const { dispatch } = this.props;
	}

	render () {
		return (
			<Router history={ history }>
				<Layout>
					<Route exact path="/" component={ HomePage }/>
					<Route path="/auth" component={ AuthPortal }/>
				</Layout>
			</Router>
		);
	}
}

function mapStateToProps ( state ) {
	return {};
}

const connectedApp = connect( mapStateToProps )( withAuthentication( App ) );
export { connectedApp as App };