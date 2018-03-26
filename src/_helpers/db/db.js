import { firebaseDb } from "../firebase";
import * as dbActions from "./actions";

//User API
// export function initAuth(dispatch) {
//
export function onSignIn ( dispatch, authUser ) {
	return new Promise( ( resolve, reject ) => {
		//Check if user exists
		const dbUser = onceGetCurrentUser( authUser.uid );
		if ( !!dbUser ) {
			//action: getResource
			dispatch( dbActions.setUserResource( dbUser )
				.catch( error => reject( error ) ) );
			resolve();
		} else {
			//action: createResource
			doCreateUser( authUser.uid, authUser.displayName, authUser.email )
				.then( onSignIn( dispatch, authUser ) )
				.catch( error => reject( error ) );
		}
	} );
}

function doCreateUser ( id, username, email ) {
	firebaseDb.ref( `users/${id}` ).set( {
		username,
		email,
	} )
}

function onceGetCurrentUser ( uid ) {
	firebaseDb.ref( `users/${uid}` ).once( "value" ).then( function ( snapshot ) {
		return snapshot.val();
	} )
}

export const onceGetCurrentUserWidgets = ( uid ) =>
	firebaseDb.ref( `users/${uid}` ).once( "value" ).then( function ( snapshot ) {
		return snapshot.val().widgets;
	} );

//Other Entity APIs...