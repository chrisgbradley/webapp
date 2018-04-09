import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";


import * as routes from "../_constants/routes";
import { getAuth } from "../_helpers/auth/index";
//HOCs
import RequireAuthRoute from "./components/RequireAuthRoute";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Pages
import HomePage from "./pages/Home";
import AuthPortal from "./pages/AuthPortal";
import Dashboard from "./pages/Dashboard";

import * as classes from "./App.css";

const App = ( { authenticated, signOut } ) => (
	<div className={ classes.App }>
		<Header
			authenticated={ authenticated }
			signOut={ signOut }
		/>
		<main>
			<Switch>
				<Route exact path={ routes.HOME } component={ HomePage }/>
				<RequireAuthRoute authenticated={ authenticated } path={ routes.DASHBOARD } component={ Dashboard }/>
				<Route
					path={ routes.AUTH_PORTAL }
					render={ props =>
						<AuthPortal authenticated={ authenticated } { ...props } />
					}
				/>
				<Redirect to={ routes.HOME }/>
			</Switch>
		</main>
		<Footer/>
	</div>
);

App.propTypes = {
	authenticated: PropTypes.bool.isRequired
};

/*----------------
	CONNECT
 -----------------*/

const mapStateToProps = getAuth;


export default withRouter(
	connect(
		mapStateToProps
	)( App )
);