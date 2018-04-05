import React, { Fragment } from "react";

import Button from "../../components/Button";
import { authActions } from "../../../_helpers/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SignIn = ( { signInWithGoogle } ) => (
	<Fragment>
		<Button onClick={ signInWithGoogle }>Google</Button>
	</Fragment>
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

