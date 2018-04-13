import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import WidgetSelection from "../WidgetSelection";
import WidgetBuilderLayout from "../WidgetBuilderLayout";


class WidgetCreator extends Component {
	static propTypes = {
		loadableWidgets: PropTypes.object,
		getWidget: PropTypes.func.isRequired,
		handleClose: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
	};

	constructor ( props ) {
		super( props );

		this.state = {
			selection: null,

		};
	}

	widgetOptions = Object.values( this.props.loadableWidgets ).map( widget => ( {
		id: widget.uniqueId,
		card: widget.card
	} ) );

	handleSelectionMade ( widgetId ) {
		const widget = this.props.getWidget( widgetId );
		console.log( "clicked " + widgetId );
		return this.setState( { selection: widget } );
	}

	handleBackToSelection () {
		return this.setState( { selection: null } );
	}

	render () {
		return (
			<Fragment>
				{ this.state.selection ?
					<WidgetBuilderLayout
						handleBackToSelection={ this.handleBackToSelection.bind( this ) }
						handleClose={ this.props.handleClose }
						widgetId={ this.state.selection.uniqueId }
						BuilderForm={ this.state.selection.BuilderComponent }
						handleSubmit={ this.props.handleSubmit }
					/>
					:
					<WidgetSelection
						handleWidgetClicked={ this.handleSelectionMade.bind( this ) }
						handleClose={ this.props.handleClose }
						widgetOptions={ this.widgetOptions }/>
				}
			</Fragment>
		);
	}
}

export default WidgetCreator;