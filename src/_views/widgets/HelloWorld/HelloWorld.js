import React from "react";

const HelloWorld = ( { title, data } ) => (
	<div>
		<p>{ title }</p>
		<p>{ data.extraMessage }</p>
	</div>
);

export default HelloWorld;

