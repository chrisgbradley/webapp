import React, { Component } from "react";
import { Link, withRouter, } from "react-router-dom";

import { SignUpLink } from "./SignUp";
import { auth } from "../firebase";
import * as routes from "../constants/routes";

const SignInPage = ( { history } ) => (
    <div>
	    <h1>SignIn</h1>
	    <SignInForm history={ history }/>
	    <SignUpLink/>
    </div>
);

const byPropKey = ( propertyName, value ) => () => ( {
	[ propertyName ]: value,
} );

const INITIAL_STATE = {
	email: "",
	password: "",
	error: null,
};

class SignInForm extends Component {
	onSubmit = ( event ) => {
		const {
			email,
			password,
		} = this.state;

		const {
			history,
		} = this.props;

		auth.doSignInWithEmailAndPassword( email, password )
			.then( () => {
				this.setState( () => ( { ...INITIAL_STATE } ) );
				history.push( routes.LANDING );
			} )
			.catch( error => {
				this.setState( byPropKey( "error", error ) );
			} );

		event.preventDefault();
	};

	constructor ( props ) {
		super( props );

		this.state = { ...INITIAL_STATE };
	}

	render () {
		const {
			email,
			password,
			error,
		} = this.state;

		const isInvalid =
			password === "" ||
			email === "";

		return (
			<form onSubmit={ this.onSubmit }>
				<input
					value={ email }
					onChange={ event => this.setState( byPropKey( "email", event.target.value ) ) }
					type="text"
					placeholder="Email Address"
				/>
				<input
					value={ password }
					onChange={ event => this.setState( byPropKey( "password", event.target.value ) ) }
					type="password"
					placeholder="Password"
				/>
				<button disabled={ isInvalid } type="submit">
					Sign In
				</button>

				{ error && <p>{ error.message }</p> }
			</form>
		);
	}
}

const SignInLink = () => (
	<p>
		Already have an account?
		{ " " }
		<Link to={ routes.SIGN_IN }>Sign In</Link>
	</p>
);

export default withRouter( SignInPage );

export {
	SignInForm,
	SignInLink,
};