import { List, Record } from "immutable";
import { SIGN_OUT_SUCCESS } from "../auth";
import {
	CREATE_WIDGET_SUCCESS,
	LOAD_WIDGETS_SUCCESS,
	REMOVE_WIDGET_SUCCESS,
	UPDATE_WIDGET_SUCCESS
} from "./actionTypes";

export const WidgetsState = new Record( {
	filter: "",
	list: new List()
} );

export function widgetsReducer ( state = new WidgetsState(), { payload, type } ) {
	switch ( type ) {
		case CREATE_WIDGET_SUCCESS:
			return state.merge( {
				list: state.list.push( payload )
			} );
		case REMOVE_WIDGET_SUCCESS:
			return state.merge( {
				list: state.list.filter( widget => widget.key !== payload.key )
			} );
		case LOAD_WIDGETS_SUCCESS:
			return state.set( "list", new List( payload.reverse() ) );
		case UPDATE_WIDGET_SUCCESS:
			return state.merge( {
				list: state.list.map( widget => {
					return widget.key === payload.key ? payload : widget;
				} )
			} );
		case SIGN_OUT_SUCCESS:
			return new WidgetsState();

		default:
			return state;
	}
}