import React from "react";

import { withAuthorization } from "../../components/hoc";

const Dashboard = ( props ) => (
	<div>
		dashboard
	</div>
);

const authCondition = ( authUser ) => !!authUser;

export default withAuthorization( authCondition )( Dashboard );

