import React, { Component } from "react";

import { auth } from "../../../_helpers";
import * as routes from "../../../_constants/routes";

const INITIAL_STATE = {
	error: null,
};

class AuthPortal extends Component {
	handleGoogleSignIn = () => {
		const { history } = this.props;

		auth.doSignInWithPopup()
			.then( () => {
				this.setState( () => ( { ...INITIAL_STATE } ) );
				history.push( routes.HOME );
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
				<GoogleSignIn clicked={ this.handleGoogleSignIn.bind( this ) }/>
				{ error && <p>{ error.message }</p> }
			</div>
		);
	}
}

export const GoogleSignIn = ( props ) => (
	<button onClick={ props.clicked() }>Google - Sign In</button>
);

export default AuthPortal;