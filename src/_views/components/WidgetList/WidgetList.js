import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";

import * as classes from "./WidgetList.css";

import Button from "../Button";
import WidgetFrame from "../WidgetFrame";
import WidgetControlsWrapper from "../WidgetControlsWrapper/";


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
				settingsEdit={ () => handleSettingsEdit( widget.key ) }
				settingsRemove={ () => handleSettingsRemove( widget.key ) }
			/>
		);
	} );

	return (
		<Fragment>
			<WidgetControlsWrapper>
				<Button className={ classes.NewWidgetButton } onClick={ handleNewWidgetClicked }>New Widget</Button>
			</WidgetControlsWrapper>
			<div className={ classes.WidgetContainer }>
				{ widgetItems }
			</div>
		</Fragment>
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

