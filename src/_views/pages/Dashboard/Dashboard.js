import React, { Component } from "react";
import { List } from "immutable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createSelector } from "reselect";

import { getWidgetsList, widgetActions } from "../../../_helpers/widgets";
import WidgetList from "../../components/WidgetList";
import WidgetCreator from "../../components/WidgetCreator";


import * as widgets from "../../widgets";


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
		this._loadableWidgets = widgets;
	}

	CURRENT_URL = this.props.match.url;

	componentWillMount () {
		this.props.loadWidgets();
	}

	componentWillUnmount () {
		this.props.unloadWidgets();
	}

	getWidget ( id ) {
		switch ( id ) {
			case widgets.HelloWorld.uniqueId:
				return widgets.HelloWorld;

			default:
				return null;
		}
	}

	handleNewWidgetClicked () {
		return this.props.history.push( `${this.CURRENT_URL}/new-widget` );
	}

	handleCreateWidget ( { title, data, widgetId } ) {
		this.props.createWidget( title, data, widgetId );
		this.closeCreator();
	}

	handleWidgetModify ( event ) {
		return console.log( "modify", event.target.id );
	}

	handleWidgetRemove ( event ) {
		return console.log( "remove", event.target.id );
	}

	closeCreator () {
		return this.props.history.push( "/dashboard" );
	}

	render () {
		return (
			<div>
				<h1>Dashboard</h1>
				<div>
					<Switch>
						<Route path={ `${this.CURRENT_URL}/new-widget` } render={ props => (
							<WidgetCreator
								getWidget={ this.getWidget.bind( this ) }
								handleSubmit={ this.handleCreateWidget.bind( this ) }
								handleCloseCreator={ this.closeCreator.bind( this ) }
								loadableWidgets={ this._loadableWidgets }
								{ ...props }
							/>
						) }/>
						<Route path="/" render={ props => (
							<WidgetList
								getWidget={ this.getWidget.bind( this ) }
								handleSettingsEdit={ this.handleWidgetModify.bind( this ) }
								handleSettingsRemove={ this.handleWidgetRemove.bind( this ) }
								handleNewWidgetClicked={ this.handleNewWidgetClicked.bind( this ) }
								loadableWidgets={ this._loadableWidgets }
								widgets={ this.props.widgets }
								{ ...props }
							/>
						) }/>
						<Redirect to="/"/>
					</Switch>
				</div>
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
