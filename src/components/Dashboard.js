import React from "react";

import withAuthorization from "./hoc/withAuthorization";

const DashboardPage = () => (
    <div>
        <h1>Dashboard Page</h1>
    </div>
);

const authCondition = ( authUser ) => !!authUser;

export default withAuthorization( authCondition )( DashboardPage );