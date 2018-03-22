import * as firebase from "firebase";

import { firebaseConfig } from "../secrets";

const config = {
	...firebaseConfig
};

if ( !firebase.apps.length ) {
	firebase.initializeApp( config );
}

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
	db,
	auth,
	provider,
};