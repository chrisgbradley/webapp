import React from "react";

const Dashboard = ( props ) => (
	<div>Dashboard</div>
);

export default Dashboard;


// import React, { Component } from "react";
// import { connect } from "react-redux";
//
// import { db } from "../../../_helpers";
// import { withAuthorization } from "../../components/hoc";
// import { WidgetList } from "../../widgets";
//
// class Dashboard extends Component {
// 	constructor (props) {
// 		super(props);
//
// 		this.state = {
// 			widgets: [],
// 			error: null,
// 		}
// 	}
//
// 	handleCreateWidget = ( userId ) => {
//
// 	};
//
// 	//handleGetAllWidgets
//
// 	//handleModifyWidget
//
// 	//handleDestroyWidget
//
// 	componentDidMount() {
//
// 	}
//
// 	render() {
// 		const { widgets } = this.state;
//
// 		return (
// 			<div>
// 				<WidgetList widgets={ widgets } />
// 			</div>
// 		);
// 	}
// }
//
// const authCondition = ( authUser ) => !!authUser;
//
// const mapStateToProps = (state) => ({
// 	authUser: state.sessionState.authUser,
// 	user: state.userState.user
// });
//
// const mapDispatchToProps = (dispatch) => ({
// 	// crud actions
// 	onCreateWidget:
// });
//
// export default withAuthorization( authCondition )( connect(mapStateToProps, mapDispatchToProps)(Dashboard ));
//
