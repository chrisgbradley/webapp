import { db } from "./firebase";

//User API

export const doCreateUser = ( id, username, email ) =>
	db.ref( `users/${id}` ).set( {
		username,
		email,
	} );

export const onceGetCurrentUser = ( uid ) =>
	db.ref( `users/${uid}` ).once( "value" ).then( function ( snapshot ) {
		return snapshot.val();
	} );

//Other Entity APIs...