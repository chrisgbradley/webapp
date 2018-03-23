import React, { Component } from "react";

import { auth } from "../../../_helpers";
import * as routes from "../../../_constants/routes";

const INITIAL_STATE = {
	error: null,
};

const byPropKey = ( propertyName, value ) => () => ( {
	[ propertyName ]: value,
} );

class AuthPortal extends Component {
	handleGoogleSignIn = () => {
		const { history } = this.props;

		auth.doSignInWithPopup()
			.then( () => {
				this.setState( () => ( { ...INITIAL_STATE } ) );
				history.push( routes.HOME );
			} ).catch( error => {
			this.setState( byPropKey( "error", error ) );
		} );
	};

	constructor ( props ) {
		super( props );

		this.state = { ...INITIAL_STATE };
	}

	render () {

		const { error } = this.state;

		return (
			<div>
				<GoogleSignIn clicked={ this.handleGoogleSignIn }/>
				{ error && <p>{ error.message }</p> }
			</div>
		);
	}
}

export const GoogleSignIn = ( props ) => (
	<button onClick={ props.clicked }>Google - Sign In</button>
);

export default AuthPortal;