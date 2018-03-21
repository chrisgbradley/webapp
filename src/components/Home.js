import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import withAuthorization from "./hoc/withAuthorization";
import { db } from "../firebase";

class HomePage extends Component {
	componentDidMount () {
		const { onSetUser } = this.props;

		db.onceGetCurrentUser().then( value =>
			onSetUser( value )
		);
	}

	render () {
		const { user } = this.props;

		return (
			<div>
				<h1>Home</h1>
				<p>The Home Page is accessible by every signed in user.</p>

				{ !!user && <UserList users={ user }/> }
			</div>
		);
	}
}

const UserList = ( { user } ) => (
	<div>
		<h2>List of Usernames of Users</h2>
		<p>(Saved on Sign Up in Firebase Database)</p>

		{ user }
	</div>
);

const mapStateToProps = ( state ) => ( {
	user: state.userState.user,
} );

const mapDispatchToProps = ( dispatch ) => ( {
	onSetUser: ( user ) => dispatch( { type: "USER_SET", user } ),
} );

const authCondition = ( authUser ) => !!authUser;

export default compose(
	withAuthorization( authCondition ),
	connect( mapStateToProps, mapDispatchToProps )
)( HomePage );