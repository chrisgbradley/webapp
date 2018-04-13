import React from "react";
import PropTypes from "prop-types";
import WidgetBuilderLayout from "../WidgetBuilderLayout";


function WidgetEditor ( { BuilderForm, widget, handleSubmit, handleClose } ) {
	return (
		<div>
			<WidgetBuilderLayout
				handleClose={ handleClose }
				widgetId={ widget.widgetId }
				widgetData={ widget }
				BuilderForm={ BuilderForm }
				handleSubmit={ handleSubmit }
			/>
		</div>
	);
}

WidgetEditor.propTypes = {
	widget: PropTypes.object.isRequired,
	BuilderForm: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};


export default WidgetEditor;