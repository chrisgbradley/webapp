import React, { Component } from "react";
import Immutable, { List } from "immutable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { getWidgetsList, widgetActions } from "../../../_helpers/widgets";
import WidgetList from "../../components/WidgetList";
import WidgetCreator from "../../components/WidgetCreator";

import * as classes from "./Dashboard.css";

import * as WIDGET_MODULES from "../../widgets";
import Modal from "../../components/Modal";
import WidgetEditor from "../../components/WidgetEditor";


export class Dashboard extends Component {
	static propTypes = {
		createWidget: PropTypes.func.isRequired,
		loadWidgets: PropTypes.func.isRequired,
		removeWidget: PropTypes.func.isRequired,
		widgets: PropTypes.instanceOf( List ).isRequired,
		unloadWidgets: PropTypes.func.isRequired,
		updateWidget: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired
	};

	constructor ( props ) {
		super( props );

		this.state = {
			creatingWidget: false,
			editingWidget: null,
		};

		this._loadableWidgets = WIDGET_MODULES;

	}

	componentWillMount () {
		this.props.loadWidgets();
	}

	componentDidUpdate () {
		this._widgetsMap = this.props.widgets.reduce(
			function ( result, item ) { return result.set( item.get( "key" ), item ); },
			Immutable.Map() );
	}

	componentWillUnmount () {
		this.props.unloadWidgets();
	}

	getWidgetModule ( id ) {
		switch ( id ) {
			case this._loadableWidgets.HelloWorld.uniqueId:
				return this._loadableWidgets.HelloWorld;

			default:
				return null;
		}
	}

	getWidgetFromList () {

	}

	handleNewWidgetClicked () {
		return this.setState( { creatingWidget: true } );
	}

	handleEditWidgetClicked ( widgetKey ) {
		const widget = this._widgetsMap.find( widget => widget.get( "key" ) === widgetKey ).toJS();
		return this.setState( { editingWidget: widget } );
	}

	handleCreateWidget ( { title, data, widgetId } ) {
		this.props.createWidget( title, data, widgetId );
		return this.backToDashboard();
	}

	handleEditWidget ( widget ) {
		this.props.updateWidget( widget );
		return this.backToDashboard();
	}

	handleWidgetRemove ( widgetKey ) {
		return this.props.removeWidget( widgetKey );
	}

	backToDashboard () {
		return this.setState( {
			creatingWidget: false,
			editingWidget: null,
		} );
	}

	render () {
		return (
			<div className={ classes.Dashboard }>
				{ this.state.creatingWidget ? ( <Modal show={ this.state.creatingWidget }>
					<WidgetCreator
						getWidget={ this.getWidgetModule.bind( this ) }
						handleSubmit={ this.handleCreateWidget.bind( this ) }
						handleClose={ this.backToDashboard.bind( this ) }
						loadableWidgets={ this._loadableWidgets }
					/>
				</Modal> ) : null }
				{ !!this.state.editingWidget ? ( <Modal show={ !!this.state.editingWidget }>
					<WidgetEditor
						widget={ this.state.editingWidget }
						handleSubmit={ this.handleEditWidget.bind( this ) }
						handleClose={ this.backToDashboard.bind( this ) }
						BuilderForm={ this.getWidgetModule( this.state.editingWidget.widgetId ).BuilderComponent }
					/>
				</Modal> ) : null }
				<WidgetList
					getWidget={ this.getWidgetModule.bind( this ) }
					handleSettingsEdit={ this.handleEditWidgetClicked.bind( this ) }
					handleSettingsRemove={ this.handleWidgetRemove.bind( this ) }
					handleNewWidgetClicked={ this.handleNewWidgetClicked.bind( this ) }
					loadableWidgets={ this._loadableWidgets }
					widgets={ this.props.widgets }/>
			</div>
		);
	}
}

const mapStateToProps = createSelector(
	getWidgetsList,
	( widgets ) => ( {
		widgets
	} )
);

const mapDispatchToProps = Object.assign(
	widgetActions
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( Dashboard );
