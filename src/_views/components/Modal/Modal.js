import React from "react";
import classes from "./Modal.css";

const Modal = ( { show, children, classes: childClasses = [] } ) => {
	const attachedClasses = [
		classes.Modal,
		...childClasses
	];
	return (
		<div
			className={ attachedClasses.join( " " ) }
			style={ {
				transform: show ? "translateY(0)" : "translateX(-100vh)",
				opacity: show ? "1" : "0"
			} }
		>
			{ children }
		</div>
	);
};

export default Modal;

