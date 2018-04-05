import React, { Component } from "react";
import PropTypes from "prop-types";

import WidgetPicker from "../WidgetPicker";
import WidgetBuilderLayout from "../WidgetBuilderLayout";


class WidgetCreator extends Component {
	static propTypes = {
		loadableWidgets: PropTypes.object.isRequired,
		getWidget: PropTypes.func.isRequired,
		handleCloseCreator: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
	};

	state = {
		selection: null,
	};

	widgetOptions = Object.values( this.props.loadableWidgets ).map( widget => ( {
		id: widget.uniqueId,
		card: widget.card
	} ) );
	handleSelectionMade ( event ) {
		const widget = this.props.getWidget( event.target.id );
		return this.setState( { selection: widget } );
	}

	handleBackToSelection () {
		return this.setState( { selection: null } );
	}

	renderBuilderComponent () {
		return (
			<WidgetBuilderLayout
				handleBackToSelection={ this.handleBackToSelection.bind( this ) }
				handleCloseCreator={ this.props.handleCloseCreator }
				widgetId={ this.state.selection.uniqueId }
				BuilderForm={ this.state.selection.BuilderComponent }
				handleSubmit={ this.props.handleSubmit }
			/>
		);
	}

	render () {
		return (
			<div>
				<h2>Widget Creator</h2>
				{ this.state.selection ?
					this.renderBuilderComponent()
					:
					<WidgetPicker
						handleWidgetClicked={ this.handleSelectionMade.bind( this ) }
						handleCloseCreator={ this.props.handleCloseCreator }
						widgetOptions={ this.widgetOptions }/>
				}
			</div>
		);
	}
}

export default WidgetCreator;