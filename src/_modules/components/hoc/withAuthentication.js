import React from "react";
import { connect } from "react-redux";

import { db, firebase } from "../../../_helpers";

const withAuthentication = ( Component ) => {
	class WithAuthentication extends React.Component {
		componentDidMount () {
			const { onSetAuthUser, onSetUser } = this.props;

			firebase.auth.onAuthStateChanged( authUser => {
				if ( authUser ) {
					onSetAuthUser( authUser );
					db.onceGetCurrentUser( authUser.uid )
						.then( user => {
							if ( user ) {
								onSetUser( user );
							} else {
								db.doCreateUser( authUser.uid, authUser.displayName, authUser.email )
									.then( () => {
										const user = db.onceGetCurrentUser( authUser.uid );
										onSetUser( user );
									} );
							}
						} );
				} else {
					onSetAuthUser( null );
					onSetUser( null );
				}
			} );
		}

		render () {
			return <Component/>;
		}
	}

	const mapDispatchToProps = ( dispatch ) => ( {
		onSetAuthUser: ( authUser ) => dispatch( { type: "AUTH_USER_SET", authUser } ),
		onSetUser: ( user ) => dispatch( { type: "USER_SET", user } ),
	} );

	return connect( null, mapDispatchToProps )( WithAuthentication );
};

export default withAuthentication;

