import React from "react";

const WidgetFrame = ( { Component, data } ) => (
	<div>
		<Component data={ data }/>
	</div>
);

export default WidgetFrame;

