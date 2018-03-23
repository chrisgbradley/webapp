import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { firebase } from "../../../_helpers";
import { routes } from "../../../_constants";

const withAuthorization = ( authCondition ) => ( Component ) => {
	class WithAuthorization extends React.Component {
		componentDidMount () {
			firebase.auth.onAuthStateChanged( authUser => {
				if ( !authCondition( authUser ) ) {
					this.props.history.push( routes.AUTH_PORTAL );
				}
			} );
		}

		render () {
			return this.props.authUser ? <Component/> : null;
		}
	}

	const mapStateToProps = ( state ) => ( {
		authUser: state.sessionState.authUser,
	} );

	return compose(
		withRouter,
		connect( mapStateToProps ),
	)( WithAuthorization );
};

export default withAuthorization;