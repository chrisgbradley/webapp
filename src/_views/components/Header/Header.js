import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Navigation from "../Navigation";


const Header = ( { authenticated } ) => {

	return (
		<Fragment>
			<Navigation authenticated={ authenticated }/>
		</Fragment>

	);
};

Header.propTypes = {
	authenticated: PropTypes.bool.isRequired
};

export default Header;

