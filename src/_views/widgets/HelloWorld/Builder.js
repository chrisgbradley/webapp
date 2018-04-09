import React, { Fragment } from "react";
import { Field } from "redux-form";

const Builder = ( { widgetData } ) => (
	<Fragment>
		<div>
			<Field name="extraMessage" component="input" type="text" value={ widgetData ? widgetData.extraMessage : "" }/>
		</div>
	</Fragment>
);

export default Builder;

