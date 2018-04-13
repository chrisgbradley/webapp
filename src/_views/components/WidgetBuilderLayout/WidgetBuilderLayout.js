import React, { Fragment } from "react";
import { Field, FormSection, reduxForm } from "redux-form";
import Button from "../Button";
import WidgetControlsWrapper from "../WidgetControlsWrapper/";

import "./form.css";
import Icon from "../icon";

const WidgetBuilderLayout = ( { widgetData = null, handleBackToSelection = null, handleClose, BuilderForm, widgetId, handleSubmit } ) => (
	<div>
		<WidgetControlsWrapper>
			{ !!handleBackToSelection ? <Button className="left-control" onClick={ handleBackToSelection }><Icon
				name="keyboard_arrow_left"/> Back</Button> : null }
			<Button className="right-control" onClick={ handleClose }>Cancel <Icon name="close"/></Button>
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
				<form className="w-form" onSubmit={ handleSubmit( data => onSubmit( { ...data, widgetId } ) ) }>
					<div>
						<Field name="title"
						       autoFocus={ true }
						       component="input"
						       type="text"
						       placeholder="Widget Name"
						       value={ !!this.props.widgetData ? this.props.widgetData.title : "" }/>
					</div>
					<FormSection name="data">
						{ this.renderBuilderForm( this.props.BuilderForm, this.props.widgetData ) }
					</FormSection>
					<Button type="submit"><Icon name="done"/> Save Widget</Button>
				</form>
			</Fragment>
		);
	}
}


WidgetForm = reduxForm( {
	form: "widget",
} )( WidgetForm );


export default WidgetBuilderLayout;

