import React from "react";
import { Redirect, Route } from "react-router-dom";

import * as routes from "../../../_constants/routes";


const RequireUnauthRoute = ( { component: Component, authenticated, ...rest } ) => (
	<Route
		{ ...rest }
		render={ props => {
			return authenticated ? (
				<Redirect to={ {
					pathname: routes.DASHBOARD,
					state: { from: props.location }
				} }/>
			) : (
				<Component { ...props }/>
			);
		} }
	/>
);


export default RequireUnauthRoute;
