import { widgetList } from "./widgetList";
import {
	CREATE_WIDGET_ERROR,
	CREATE_WIDGET_SUCCESS,
	LOAD_WIDGETS_SUCCESS,
	REMOVE_WIDGET_ERROR,
	REMOVE_WIDGET_SUCCESS,
	UNLOAD_WIDGETS_SUCCESS,
	UPDATE_WIDGET_ERROR,
	UPDATE_WIDGET_SUCCESS
} from "./actionTypes";

export function createWidget ( title, data, widgetId ) {
	return dispatch => {
		widgetList.push( { title, data, widgetId } )
			.catch( error => dispatch( createWidgetError( error ) ) );
	};
}

export function createWidgetSuccess ( widget ) {
	return {
		type: CREATE_WIDGET_SUCCESS,
		payload: widget
	};
}

export function createWidgetError ( error ) {
	return {
		type: CREATE_WIDGET_ERROR,
		payload: error
	};
}

export function removeWidget ( widget ) {
	return dispatch => {
		widgetList.remove( widget.key )
			.catch( error => dispatch( removeWidgetError( error ) ) );
	};
}

export function removeWidgetSuccess ( widget ) {
	return {
		type: REMOVE_WIDGET_SUCCESS,
		payload: widget
	};
}

export function removeWidgetError ( error ) {
	return {
		type: REMOVE_WIDGET_ERROR,
		payload: error
	};
}

export function updateWidget ( widget ) {
	return dispatch => {
		widgetList.update( widget )
			.catch( error => dispatch( updateWidgetError( error ) ) );
	};
}

export function updateWidgetSuccess ( widget ) {
	return {
		type: UPDATE_WIDGET_SUCCESS,
		payload: widget
	};
}

export function updateWidgetError ( error ) {
	return {
		type: UPDATE_WIDGET_ERROR,
		payload: error
	};
}

export function loadWidgets () {
	return ( dispatch, getState ) => {
		const { auth } = getState();
		widgetList.path = `widgets/${auth.id}`;
		widgetList.subscribe( dispatch );
	};
}

export function loadWidgetsSuccess ( widgets ) {
	return {
		type: LOAD_WIDGETS_SUCCESS,
		payload: widgets
	};
}

export function unloadWidgets () {
	widgetList.unsubscribe();
	return {
		type: UNLOAD_WIDGETS_SUCCESS
	};
}