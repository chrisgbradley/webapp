import React from "react";
import { connect } from "react-redux";
import { authActions } from "../../../_helpers/auth";

class SignOut extends React.Component {
	componentWillMount () {
		this.props.signOut();
	}

	render () {
		return null;
	}
}

const mapDispatchToProps = {
	//todo: refactor to use User model for deauth
	signOut: authActions.signOut
};


export default connect( null, mapDispatchToProps )( SignOut );

