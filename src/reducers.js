import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import { authReducer } from "./_helpers/auth";
import { widgetsReducer } from "./_helpers/widgets";

const rootReducer = combineReducers( {
	auth: authReducer,
	routing: routerReducer,
	widgets: widgetsReducer,
	form: formReducer
} );

export default rootReducer;