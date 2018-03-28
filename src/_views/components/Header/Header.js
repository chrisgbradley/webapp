import React from "react";
import PropTypes from "prop-types";

import classes from "./Header.css";
import Navigation from "../Navigation";

const Header = ( { authenticated } ) => {

	const attachedClasses = [
		classes.Header,
		"u-full-width",
	];

	return (
		<header className={ attachedClasses.join( " " ) }>
			<Navigation authenticated={ authenticated }/>
		</header>
	);
};

Header.propTypes = {
	authenticated: PropTypes.bool.isRequired
};

export default Header;

