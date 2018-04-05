import React, { Fragment } from "react";
import { Field } from "redux-form";

const Builder = () => (
	<Fragment>
		<div>
			<Field name="extraMessage" component="input" type="text"/>
		</div>
	</Fragment>
);

export default Builder;

