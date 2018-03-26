import React from "react";
import { Redirect, Route } from "react-router-dom";

import * as routes from "../../../_constants/routes";

const RequireAuthRoute = ( { component: Component, authenticated, ...rest } ) => (
	<Route
		{ ...rest }
		render={ props => {
			return authenticated ? (
				<Component { ...props } />
			) : (
				<Redirect to={ {
					pathname: routes.AUTH_PORTAL,
					state: { from: props.location }
				} }/>
			);
		} }
	/>
);

export default RequireAuthRoute;

