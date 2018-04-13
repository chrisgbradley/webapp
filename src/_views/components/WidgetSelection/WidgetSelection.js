import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import WidgetControlsWrapper from "../WidgetControlsWrapper/";
import Icon from "../icon";

import "./widget-selection.css";

const WidgetSelection = ( { handleClose, handleWidgetClicked, widgetOptions } ) => (
	<div className="w-selection">
		<WidgetControlsWrapper>
			<Button className="right-control" onClick={ handleClose }>Close <Icon name="close"/></Button>
		</WidgetControlsWrapper>
		<ul className="w-options">
			{ widgetOptions.map( ( widget, key ) => (
				<Button className="w-option" key={ key } onClick={ () => handleWidgetClicked( widget.id.toLowerCase() ) }
				        id={ widget.id.toLowerCase() }>
					{ widget.card.name }
				</Button>
			) ) }
		</ul>
	</div>
);

WidgetSelection.propTypes = {
	widgetOptions: PropTypes.array.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleWidgetClicked: PropTypes.func.isRequired
};

export default WidgetSelection;

