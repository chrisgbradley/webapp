import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { routes } from "../../_constants";
import { SignOutButton } from "./";

const Header = ( props ) => (
	<header>
		<Navigation authUser={ props.authUser }/>
	</header>
);

const Navigation = ( props ) => (
	<ul>
		{ !!props.authUser ? <li>Hello, { props.authUser.displayName }</li> : null }
		<li><Link to={ routes.HOME }>Home</Link></li>
		<li><Link to={ routes.DASHBOARD }>Dashboard</Link></li>
		<li>{ !!props.authUser ? <SignOutButton/> : <Link to={ routes.AUTH_PORTAL }>Sign In</Link> }</li>
	</ul>
);

const mapStateToProps = ( state ) => ( {
	authUser: state.sessionState.authUser,
} );

export default connect( mapStateToProps )( Header );

