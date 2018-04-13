import React from "react";

import Button from "../../components/Button";
import { authActions } from "../../../_helpers/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./signin.css";

const SignIn = ( { signInWithGoogle } ) => (
	<div className='container'>
		<div className="u-full-width u-center-content">
			<Button className="sign-in" onClick={ signInWithGoogle }>Google</Button>
		</div>
	</div>
);

SignIn.propTypes = {
	signInWithGoogle: PropTypes.func.isRequired
};

const mapDispatchToProps = {
	signInWithGoogle: authActions.signInWithGoogle,
};

export default connect(
	null,
	mapDispatchToProps
)( SignIn );

