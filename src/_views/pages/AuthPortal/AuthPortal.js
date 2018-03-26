import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authActions } from "../../../_helpers/auth";
import Button from "../../components/Button";

const AuthPortal = ( { signInWithGoogle } ) => (
	<div>
		<SignInForm signInWithGoogle={ signInWithGoogle }/>
	</div>
);

AuthPortal.propTypes = {
	signInWithGoogle: PropTypes.func.isRequired
};


const SignInForm = ( { signInWithGoogle } ) => {
	return (
		<div>
			<Button onClick={ signInWithGoogle }>Google</Button>
		</div>
	);
};

SignInForm.propTypes = {
	signInWithGoogle: PropTypes.func.isRequired
};

/*----------------
	CONNECT
 -----------------*/

const mapDispatchToProps = {
	signInWithGoogle: authActions.signInWithGoogle,
};

export default connect(
	null,
	mapDispatchToProps
)( AuthPortal );

