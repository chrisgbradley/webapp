import React from "react";
import "./home.css";

const Home = ( props ) => (
	<div className="container">
		<h1 className="main-header">Widget WebApp</h1>
		<section className="section">
			<h2 className="section-header">Intro</h2>
			<div className="section-content">
				<p className="text">
					This application is built using ReactJS and is a spin-off of the classic "to-do list" project.
					However, instead of using mere single line tasks as my list items, I used objects that I call
					widgets ( clever, I know...). Widgets are, at their core, completely modular. You can have weather
					widgets, clock widgets, budgeting widgets, and yes, list widgets.
				</p>
			</div>
		</section>
		<section className="section">
			<div className="section-content">
				<p className="text">
					This page is under construction. I'll be updating the content soon with further explantation of
					this project.
				</p>
			</div>
		</section>
	</div>
);

export default Home;

