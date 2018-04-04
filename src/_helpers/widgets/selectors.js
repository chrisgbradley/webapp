// import { createSelector } from 'reselect';

export function getWidgets ( state ) {
	return state.widgets;
}

export function getWidgetsList ( state ) {
	return getWidgets( state ).list;
}