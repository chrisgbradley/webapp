import React from "react";
import PropTypes from "prop-types";
import { List } from "immutable";

import Button from "../Button";
import WidgetFrame from "../WidgetFrame";


function WidgetList ( { loadableWidgets, widgets, handleNewWidgetClicked, handleSettingsEdit, handleSettingsRemove, getWidget } ) {
	function handleComponentType ( componentId ) {
		return getWidget( componentId ).Component;
	}

	let widgetItems = widgets.map( ( widget, index ) => {
		return (
			<WidgetFrame
				key={ index }
				Component={ handleComponentType( widget.widgetId ) }
				title={ widget.title }
				data={ widget.data }
				settingsEdit={ handleSettingsEdit }
				settingsRemove={ handleSettingsRemove }
			/>
		);
	} );

	return (
		<div>
			<h2>WidgetList</h2>
			{ widgetItems }
			<Button onClick={ handleNewWidgetClicked }>New Widget</Button>
		</div>
	);
}

WidgetList.propTypes = {
	handleNewWidgetClicked: PropTypes.func.isRequired,
	loadableWidgets: PropTypes.object.isRequired,
	widgets: PropTypes.instanceOf( List ).isRequired,
	handleSettingsEdit: PropTypes.func.isRequired,
	handleSettingsRemove: PropTypes.func.isRequired,
	getWidget: PropTypes.func.isRequired,
};

export default WidgetList;
