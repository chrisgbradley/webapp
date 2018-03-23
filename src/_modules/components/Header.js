import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { SignOutButton } from "./";

const Header = ( props ) => (
	<header>
		<Navigation authenticated={ !!props.authUser }/>
	</header>
);

const Navigation = ( props ) => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/">Dashboard</Link></li>
		<li>{ props.authenticated ? <SignOutButton/> : <Link to="/">Sign In</Link> }</li>
	</ul>
);

const mapStateToProps = ( state ) => ( {
	authUser: state.sessionState.authUser,
} );

export default connect( mapStateToProps )( Header );

