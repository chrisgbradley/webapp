import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import * as routes from "../../../_constants/routes";
import RequireUnauthRoute from "../../components/RequireUnauthRoute";

import SignOut from "./SignOut";
import SignIn from "./SignIn";

const AuthPortal = ( { match, authenticated } ) => (
	<div>
		<Switch>
			<RequireUnauthRoute authenticated={ authenticated } path={ `${match.url}/sign-in` } component={ SignIn }/>
			<RequireUnauthRoute authenticated={ authenticated } path={ `${match.url}/sign-up` } component={ null }/>
			<Route path={ `${match.url}/sign-out` } component={ SignOut }/>
			<Redirect to={ routes.HOME }/>
		</Switch>
	</div>
);

AuthPortal.propTypes = {
	authenticated: PropTypes.bool.isRequired
};


export default AuthPortal;

