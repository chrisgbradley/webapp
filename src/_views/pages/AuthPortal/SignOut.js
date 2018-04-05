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
	signOut: authActions.signOut
};


export default connect( null, mapDispatchToProps )( SignOut );

