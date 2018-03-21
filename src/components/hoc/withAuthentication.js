import React from "react";
import { connect } from "react-redux";

import { db, firebase } from "../../firebase";

const withAuthentication = ( Component ) => {
	class WithAuthentication extends React.Component {
		componentDidMount () {
			const { onSetAuthUser, onSetUser } = this.props;

			firebase.auth.onAuthStateChanged( authUser => {
				if ( authUser ) {
					onSetAuthUser( authUser );
					onSetUser( db.onceGetCurrentUser( authUser.uid ) );
				} else {
					onSetAuthUser( null );
					onSetUser( null );
				}
			} );
		}

		render () {
			return (
				<Component/>
			);
		}
	}

	const mapDispatchToProps = ( dispatch ) => ( {
		onSetAuthUser: ( authUser ) => dispatch( { type: "AUTH_USER_SET", authUser } ),
		onSetUser: ( user ) => dispatch( { type: "USER_SET", user } )
	} );

	return connect( null, mapDispatchToProps )( WithAuthentication );
};

export default withAuthentication;