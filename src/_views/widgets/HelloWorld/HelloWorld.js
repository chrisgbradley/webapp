import React from "react";

const HelloWorld = ( { title, data } ) => (
	<div>
		<h6>{ title }</h6>
		<p>{ data.extraMessage }</p>
	</div>
);

export default HelloWorld;

