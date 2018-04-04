import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const WidgetPicker = ( { handleCloseCreator, handleWidgetClicked, widgetCards } ) => (
	<div>
		<h2>Widget Selector</h2>
		<Button onClick={ handleCloseCreator }>Close</Button>
		<ul>
			{ widgetCards.map( ( card, key ) => (
				<button key={ key } onClick={ handleWidgetClicked } id={ card.name.toLowerCase() }>
					Widget name: { card.name }
				</button>
			) ) }
		</ul>
	</div>
);

WidgetPicker.propTypes = {
	widgetCards: PropTypes.array.isRequired,
	handleCloseCreator: PropTypes.func.isRequired,
	handleWidgetClicked: PropTypes.func.isRequired
};

export default WidgetPicker;

