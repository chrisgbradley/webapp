import React from "react";

const HelloWorld = ( { title, data } ) => (
	<div>
		<h5>Hello, world</h5>
		<h6>{ title }</h6>
		<p>{ data.extraMessage }</p>
	</div>
);

export default HelloWorld;

