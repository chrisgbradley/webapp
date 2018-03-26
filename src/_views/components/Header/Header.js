import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as routes from "../../../_constants/routes";

import Button from "../Button";

const Header = ( { authenticated, signOut } ) => (
	<header>
		<ul>
			<li><Link to={ routes.HOME }>Home</Link></li>
			<li><Link to={ routes.DASHBOARD }>Dashboard</Link></li>
			<li>
				{
					authenticated ?
						<SignOutButton signOut={ signOut }/> :
						<Link to={ routes.AUTH_PORTAL }>Sign in</Link>
				}
			</li>
		</ul>

	</header>
);

Header.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	signOut: PropTypes.func.isRequired
};

const SignOutButton = ( { signOut } ) => (
	<Button onClick={ signOut }>Sign out</Button>
);

SignOutButton.propTypes = {
	signOut: PropTypes.func.isRequired
};

export default Header;

