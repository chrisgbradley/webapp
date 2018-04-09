import React from "react";
import PropTypes from "prop-types";

import classes from "./Header.css";
import Navigation from "../Navigation";

const Header = ( { authenticated } ) => {

	const attachedClasses = [
		classes.Header,
	];

	return (
		<header className={ attachedClasses.join( " " ) }>
			<Navigation authenticated={ authenticated }/>
			<div className="u-cf"></div>
		</header>
	);
};

Header.propTypes = {
	authenticated: PropTypes.bool.isRequired
};

export default Header;

