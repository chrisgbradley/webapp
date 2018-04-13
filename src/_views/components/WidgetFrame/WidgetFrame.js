import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Icon from "../icon";

import "./widget-frame.css";

class WidgetFrame extends Component {

	static propTypes = {
		Component: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired,
		data: PropTypes.object.isRequired,
		settingsEdit: PropTypes.func.isRequired,
		settingsRemove: PropTypes.func.isRequired,
	};

	constructor ( props ) {
		super( props );

		this.state = {
			settingsOpen: false,
		};

		this.handleSettingsPane = this.handleSettingsPane.bind( this );
	}

	handleSettingsPane () {
		const settingsState = this.state.settingsOpen;
		return this.setState( { settingsOpen: !settingsState } );
	}

	closeSettingsOnCall ( func ) {
		this.setState( { settingsOpen: false } );
		return func();
	}

	render () {
		const { settingsOpen } = this.state;
		const { Component, title, data, settingsEdit, settingsRemove } = this.props;


		//todo: add modalHOC around settingsPane and pass show prop to modal using state
		//todo: remove ternary expression in favor of passing logic to modal
		return (
			<div className="w-list-item-frame w-size-2-by-3">
				{
					settingsOpen ?
						(
							<SettingsPane
								handleEdit={ () => this.closeSettingsOnCall( settingsEdit ) }
								handleRemove={ () => this.closeSettingsOnCall( settingsRemove ) }
								handleClose={ this.handleSettingsPane.bind( this ) }
							/>
						)
						:
						(
							<Fragment>
								<div className="w-content">
									<Component title={ title } data={ data }/>
								</div>
								<Button onClick={ this.handleSettingsPane } className="settings-btn u-pull-right">
									<Icon name="edit"/>
								</Button>
							</Fragment>
						)
				}
			</div>
		);
	}
}

function SettingsPane ( { handleEdit, handleRemove, handleClose } ) {

	return (
		<div className="w-settings-pane">
			<Button onClick={ handleEdit }>Edit</Button>
			<Button onClick={ handleRemove }>Remove</Button>
			<Button onClick={ handleClose }>Close</Button>
		</div>
	);
}

SettingsPane.propTypes = {
	handleEdit: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default WidgetFrame;

