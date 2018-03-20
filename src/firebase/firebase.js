import * as firebase from "firebase";

import { firebaseConfig } from "../secrets";

const config = {
	...firebaseConfig
};

if ( !firebase.apps.length ) {
	firebase.initializeApp( config );
}

const auth = firebase.auth();

export {
	auth,
};