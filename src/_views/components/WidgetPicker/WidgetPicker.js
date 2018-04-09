import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import WidgetControlsWrapper from "../WidgetControlsWrapper/";

const WidgetPicker = ( { handleClose, handleWidgetClicked, widgetOptions } ) => (
	<div>
		<WidgetControlsWrapper>
			<Button onClick={ handleClose }>Close</Button>
		</WidgetControlsWrapper>
		<h2>Widget Selector</h2>
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
	handleClose: PropTypes.func.isRequired,
	handleWidgetClicked: PropTypes.func.isRequired
};

export default WidgetPicker;

