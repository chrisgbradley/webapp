import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const WidgetPicker = ( { handleCloseCreator, handleWidgetClicked, widgetOptions } ) => (
	<div>
		<h2>Widget Selector</h2>
		<Button onClick={ handleCloseCreator }>Close</Button>
		<ul>
			{ widgetOptions.map( ( widget, key ) => (
				<button key={ key } onClick={ handleWidgetClicked } id={ widget.id.toLowerCase() }>
					Widget name: { widget.card.name }
				</button>
			) ) }
		</ul>
	</div>
);

WidgetPicker.propTypes = {
	widgetOptions: PropTypes.array.isRequired,
	handleCloseCreator: PropTypes.func.isRequired,
	handleWidgetClicked: PropTypes.func.isRequired
};

export default WidgetPicker;

