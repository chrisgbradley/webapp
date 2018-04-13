import "./_views/styles/styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { initAuth } from "./_helpers/auth";
import history from "./history";
import configureStore from "./store";
import { App } from "./_views/index";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();
const rootElement = document.getElementById( "root" );

function render ( Component ) {
	ReactDOM.render(
		<Provider store={ store }>
			<ConnectedRouter history={ history }>
				<Component/>
			</ConnectedRouter>
		</Provider>,
		rootElement
	);
}


registerServiceWorker();


initAuth( store.dispatch )
	.then( () => render( App ) )
	.catch( error => console.error( error ) );