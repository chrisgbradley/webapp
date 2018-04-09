import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../_constants/routes";
import * as classes from "./Navigation.css";

const Navigation = ( { authenticated } ) => {
	const attachedClasses = [
		classes.Navigation,
		"u-pull-right"
	];
	return (
		<nav className={ attachedClasses.join( " " ) }>
			<ul>
				<NavItem link={ routes.HOME }>Home</NavItem>
				{ authenticated ? <NavItem link={ routes.DASHBOARD }>Dashboard</NavItem> : null }
				{ authenticated ? <NavItem link={ `${routes.AUTH_PORTAL}/sign-out` }>Sign out</NavItem> : null }
				{ authenticated ? null : <NavItem link={ `${routes.AUTH_PORTAL}/sign-in` }>Sign in</NavItem> }
			</ul>
		</nav>
	);
};

Navigation.propTypes = {
	authenticated: PropTypes.bool.isRequired
};

const NavItem = props => (
	<li>
		<Link to={ props.link }>{ props.children }</Link>
	</li>
);

NavItem.propTypes = {
	link: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default Navigation;

