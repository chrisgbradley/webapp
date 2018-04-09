import React from "react";

import * as classes from "./WidgetControlsWrapper.css";

const WidgetControlsWrapper = ( { children } ) => (
	<div className={ classes.WidgetControlsWrapper }>
		{ children }
	</div>
);

export default WidgetControlsWrapper;

