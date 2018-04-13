import React from "react";
import classNames from "classnames";

import "./modal.css";

const Modal = ( { show, children, classes: childClasses = [] } ) => {
	const cssClasses = classNames( "modal", ...childClasses );
	return (
		<div
			className={ cssClasses }
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

