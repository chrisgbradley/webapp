import { Record } from "immutable";

export const User = new Record( {
	uid: undefined,
	displayName: "",
	functions: {
		db: {},
		auth: {}
	}
} );

//todo: refactor auth and db to sign in and subscribe to database using functions through this model
