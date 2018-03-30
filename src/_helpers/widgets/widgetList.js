import { FirebaseList } from "../firebaseList";
import * as widgetActions from "./actions";
import { Widget } from "./widget";

export const WidgetList = new FirebaseList( {
	onAdd: widgetActions.createWidgetSuccess,
	onChange: widgetActions.updateWidgetSuccess,
	onLoad: widgetActions.loadWidgetsSuccess,
	onRemove: widgetActions.removeWidgetSuccess
}, Widget );

