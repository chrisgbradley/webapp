import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";


function WidgetList ( { widgetComponents, widgets, handleNewWidgetClicked } ) {
	// function handleComponentType( event ) {
	// 	switch (event.target.id) {
	// 		case 'hello':
	// 			return this.setState({
	// 				selection: {
	// 					widgetId: this.props.widgets.uniqueId,
	// 					BuilderComponent: this.props.widgets.HelloWorld
	// 				}
	// 			});
	//
	// 		default:
	// 			return null;
	// 	}
	// }
	//
	// let widgetItems = widgets.map((widget, index) => {
	// 	return (
	// 		<WidgetFrame
	// 			key={index}
	// 			Component={widget}
	// 		/>
	// 	)
	// });

	return (
		<div>
			<h2>WidgetList</h2>
			<Button onClick={ handleNewWidgetClicked }>New Widget</Button>
		</div>
	);
}

WidgetList.propTypes = {
	handleNewWidgetClicked: PropTypes.func.isRequired
};

export default WidgetList;

