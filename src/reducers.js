import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import { authReducer } from "./_helpers/auth";

const rootReducer = combineReducers( {
	auth: authReducer,
	routing: routerReducer,
} );

export default rootReducer;