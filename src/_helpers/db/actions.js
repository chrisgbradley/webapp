import { SET_RESOURCE } from "./actionTypes";

export function setUserResource ( user ) {
	return {
		type: SET_RESOURCE,
		payload: user
	};
}

// function updateResource() {
// 	return something()
// 		.then(dispatch(user => updateResourceSuccess( user )))
// 		.catch(dispatch(error => updateResourceError( error )))
// }

// function destroyResource() {
// 	return something()
// 		.then(dispatch(user => destroyResourceSuccess( user )))
// 		.catch(dispatch(error => destroyResourceError( error )))
// }
