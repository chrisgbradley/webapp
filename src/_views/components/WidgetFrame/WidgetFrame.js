import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

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

	render () {
		const { settingsOpen } = this.state;
		const { Component, title, data } = this.props;

		return (
			<div>
				{
					settingsOpen
						? (
							<SettingsPane
								handleEdit={ this.props.settingsEdit }
								handleRemove={ this.props.settingsRemove }
								handleClose={ this.handleSettingsPane.bind( this ) }
							/>
						)
						: (
							<Fragment>
								<Component title={ title } data={ data }/>
								<Button onClick={ this.handleSettingsPane } /* styles={} */>Settings</Button>
							</Fragment>
						)
				}
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

