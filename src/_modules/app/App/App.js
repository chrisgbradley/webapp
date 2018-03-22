import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../../../_helpers";
import { HomePage } from "../";

class App extends Component {
	constructor ( props ) {
		super( props );

		const { dispatch } = this.props;
	}

	render () {
		return (
			<div>
				<Router history={ history }>
					<div>
						<Route path="/" component={ HomePage }/>
					</div>
				</Router>
			</div>
		);
	}
}

function mapStateToProps ( state ) {
	return {};
}

const connectedApp = connect( mapStateToProps )( App );
export { connectedApp as App };