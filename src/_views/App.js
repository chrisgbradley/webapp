import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";


import * as routes from "../_constants/routes";
import { authActions, getAuth } from "../_helpers/auth/index";
//HOCs
import RequireAuthRoute from "./components/RequireAuthRoute";
import RequireUnauthRoute from "./components/RequireUnauthRoute";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Pages
import HomePage from "./pages/Home";
import AuthPortal from "./pages/AuthPortal";
import Dashboard from "./pages/Dashboard";


const App = ( { authenticated, signOut } ) => (
	<Fragment>
		<Header
			authenticated={ authenticated }
			signOut={ signOut }
		/>
		<main>
			<Route exact path={ routes.HOME } component={ HomePage }/>
			<RequireAuthRoute authenticated={ authenticated } path={ routes.DASHBOARD } component={ Dashboard }/>
			<RequireUnauthRoute authenticated={ authenticated } path={ routes.AUTH_PORTAL } component={ AuthPortal }/>
		</main>
		<Footer/>
	</Fragment>
);

App.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	signOut: PropTypes.func.isRequired
};

/*----------------
	CONNECT
 -----------------*/

const mapStateToProps = getAuth;

const mapDispatchToProps = {
	signOut: authActions.signOut
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)( App )
);