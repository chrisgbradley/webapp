import { auth, provider } from "./firebase";

//Auth API
export const doSignInWithPopup = () =>
	auth.signInWithPopup( provider );

export const doSignOut = () =>
	auth.signOut();