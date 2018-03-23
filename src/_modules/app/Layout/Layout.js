import React from "react";

import { Footer, Header } from "../../components";

const Layout = ( props ) => (
	<React.Fragment>
		<Header/>
		{ props.children }
		<Footer/>
	</React.Fragment>
);

export default Layout;

