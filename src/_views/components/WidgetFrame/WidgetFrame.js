import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import * as classes from "./WidgetFrame.css";

import Modal from "../Modal";
import Button from "../Button";

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

		const attachedClasses = [
			classes.WidgetFrame,
			settingsOpen ? classes.SettingsPane : null
		];

		//todo: add modalHOC around settingsPane and pass show prop to modal using state
		//todo: remove ternary expression in favor of passing logic to modal
		return (
			<div className={ attachedClasses.join( " " ) }>
				<Modal show={ settingsOpen } classes={ classes.SettingsPane }>
					<SettingsPane
						handleEdit={ () => this.closeSettingsOnCall( settingsEdit ) }
						handleRemove={ () => this.closeSettingsOnCall( settingsRemove ) }
						handleClose={ this.handleSettingsPane.bind( this ) }
					/>
				</Modal>
				<Component title={ title } data={ data }/>
				<Button onClick={ this.handleSettingsPane } /* styles={} */>Settings</Button>
			</div>
		);
	}
}

function SettingsPane ( { handleEdit, handleRemove, handleClose } ) {

	return (
		<Fragment>
			<Button onClick={ handleEdit }>Edit</Button>
			<Button onClick={ handleRemove }>Remove</Button>
			<Button onClick={ handleClose }>Close</Button>
		</Fragment>
	);
}

SettingsPane.propTypes = {
	handleEdit: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default WidgetFrame;

