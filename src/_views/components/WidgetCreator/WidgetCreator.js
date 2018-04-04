import React, { Component } from "react";

import WidgetPicker from "../WidgetPicker";
import WidgetBuilderLayout from "../WidgetBuilderLayout";

import * as widgets from "../../widgets";


class WidgetCreator extends Component {
	state = {
		selection: null,
	};

	widgetOptions = Object.values( widgets ).map( widget => widget.card );

	handleSelectionMade ( event ) {
		switch ( event.target.id ) {
			case "hello":
				return this.setState( { selection: widgets.HelloWorld } );

			default:
				return null;
		}
	}

	handleBackToSelection () {
		return this.setState( { selection: null } );
	}

	renderBuilderComponent () {
		return (
			<WidgetBuilderLayout
				handleBackToSelection={ this.handleBackToSelection.bind( this ) }
				handleCloseCreator={ this.props.handleCloseCreator }
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
						widgetCards={ this.props.widgetOptions }/>
				}
			</div>
		);
	}
}

export default WidgetCreator;