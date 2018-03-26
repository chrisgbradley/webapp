import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { firebaseConfig } from "../secrets";

const config = {
	...firebaseConfig
};

if ( !firebase.apps.length ) {
	firebase.initializeApp( config );
}

const firebaseDb = firebase.database();
const firebaseAuth = firebase.auth();

export {
	firebaseDb,
	firebaseAuth
};