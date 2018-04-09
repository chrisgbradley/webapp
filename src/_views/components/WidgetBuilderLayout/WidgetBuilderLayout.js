import React, { Fragment } from "react";
import { Field, FormSection, reduxForm } from "redux-form";
import Button from "../Button";
import WidgetControlsWrapper from "../WidgetControlsWrapper/";

const WidgetBuilderLayout = ( { widgetData = null, handleBackToSelection = null, handleClose, BuilderForm, widgetId, handleSubmit } ) => (
	<div>
		<WidgetControlsWrapper>
			{ !!handleBackToSelection ? <Button onClick={ handleBackToSelection }>Back</Button> : null }
			<Button onClick={ handleClose }>Cancel</Button>
		</WidgetControlsWrapper>

		<WidgetForm
			widgetData={ widgetData }
			BuilderForm={ BuilderForm }
			onSubmit={ handleSubmit }
			widgetId={ widgetId }
		/>

	</div>
);

class WidgetForm extends React.Component {
	componentWillMount () {
		this.props.initialize( this.props.widgetData );
	}

	renderBuilderForm ( Component, props ) {
		return <Component { ...props } />;
	}

	render () {
		const { widgetId, handleSubmit, onSubmit } = this.props;
		return (
			<Fragment>
				<form onSubmit={ handleSubmit( data => onSubmit( { ...data, widgetId } ) ) }>
					<div>
						<label htmlFor="title">Title</label>
						<Field name="title" component="input" type="text"
						       value={ !!this.props.widgetData ? this.props.widgetData.title : "" }/>
					</div>
					<FormSection name="data">
						{ this.renderBuilderForm( this.props.BuilderForm, this.props.widgetData ) }
					</FormSection>
					<Button type="submit">Save Widget</Button>
				</form>
			</Fragment>
		);
	}
}


WidgetForm = reduxForm( {
	form: "widget",
} )( WidgetForm );


export default WidgetBuilderLayout;

