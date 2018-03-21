import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

const Navigation = ( { authUser } ) => (
	<div>
		{ authUser
			? <NavigationAuth authUser={ authUser }/>
			: <NavigationNonAuth/>
		}
	</div>
);

const NavigationAuth = ( authUser ) => (
    <div>
        <ul>
	        <li>Hello, { authUser.displayName }!</li>
	        <li><Link to={ routes.LANDING }>Home</Link></li>
	        <li><Link to={ routes.DASHBOARD }>Dashboard</Link></li>
	        <li><Link to={ routes.HOME }>Home</Link></li>
	        <li><SignOutButton/></li>
        </ul>
    </div>
);

const NavigationNonAuth = () => (
	<ul>
		<li><Link to={ routes.LANDING }>Landing</Link></li>
		<li><Link to={ routes.SIGN_IN }>Sign In</Link></li>
	</ul>
);

const mapStateToProps = ( state ) => ( {
	authUser: state.sessionState.authUser,
	user: state.userState.user,
} );

export default connect( mapStateToProps )( Navigation );