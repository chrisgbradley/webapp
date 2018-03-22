import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./_helpers";
import { App } from "./_modules/app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>,
	document.getElementById( "root" )
);
registerServiceWorker();
