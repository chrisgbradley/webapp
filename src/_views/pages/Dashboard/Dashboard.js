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
		widgets: PropTypes.instanceOf( List ).isRequired,
		unloadWidgets: PropTypes.func.isRequired,
		updateWidget: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired
	};

	CURRENT_URL = this.props.match.url;

	_loadableWidgets = Object.values( widgets );

	componentWillMount () {
		this.props.loadWidgets();
	}

	componentWillUnmount () {
		this.props.unloadWidgets();
	}

	handleNewWidgetClicked () {
		return this.props.history.push( `${this.CURRENT_URL}/new-widget` );
	}

	handleCreateWidget ( { title, data } ) {
		console.log( "Creating widget..." );
		console.log( title, data );
		this.props.createWidget( title, data );
		this.closeCreator();
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
								handleSubmit={ this.handleCreateWidget.bind( this ) }
								handleCloseCreator={ this.closeCreator.bind( this ) }
								widgetOptions={ this._loadableWidgets.map( widget => widget.card ) }
								{ ...props }
							/>
						) }/>
						<Route path="/" render={ props => (
							<WidgetList
								handleNewWidgetClicked={ this.handleNewWidgetClicked.bind( this ) }
								widgetComponents={ this._loadableWidgets.map( widget => widget.Component ) }
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
