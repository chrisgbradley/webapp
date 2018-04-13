import React from "react";
import "./home.css";


const Home = ( props ) => (
	<div className="container">
		<h1 className="main-header">Widget WebApp</h1>
		<section className="section">
			<h2 className="section-header">Intro</h2>
			<div className="section-content">
				<p className="text">
					This application is built using ReactJS, Redux, and Google's Firebase (Auth / RtDb) and is a spin-off of the
					classic "to-do list" project.
					However, instead of using mere single line tasks as my list items, I used objects that I call
					widgets ( clever, I know...). Widgets are, at their core, completely modular. You can have weather
					widgets, clock widgets, budgeting widgets, and yes, list widgets.
				</p>
			</div>
		</section>
		<section className="section">
			<h2 className="section-header">Future Feature Plans / Challenges</h2>
			<div className="section-content">
				<p className="text">
					These are features I plan to implement as challenges for myself to experiment with
					new technologies and also to practice working with larger scale projects that require
					concessions be made for implementation.
				</p>
				<ul className="feature-list">
					<li className="feature">Animations -- Optimized for performance, of course.</li>
					<li className="feature">
						User Settings
						<ul className="sub-feature-list">
							<li className="sub-feature">Theme Changer</li>
							<li className="sub-feature">Account Linker</li>
							<li className="sub-feature">Github, Twitter, User/Pass Auth Integration</li>
						</ul>
					</li>
					<li className="feature">Theme-able Dashboard CSS</li>
					<li className="feature">Calendar Widget -- Integrated with Google Calendar</li>
					<li className="feature">
						Experience System -- See Steve Kamb's <a className="external-link" href="https://www.nerdfitness.com/">Nerd
						Fitness</a>
						<ul className="sub-feature-list">
							<li className="sub-feature">Life XP -- for epic goals</li>
							<li className="sub-feature">Habit XP -- as a brain treat for knocking out those errands</li>
						</ul>
					</li>
					<li className="feature">
						To-Do Lists
						<ul className="sub-feature-list">
							<li className="sub-feature">Epic Quest List -- Life XP</li>
							<li className="sub-feature">Daily Agenda -- Calendar Linked</li>
							<li className="sub-feature">Habits -- Habit XP</li>
							<li className="sub-feature">Linked List -- Link Calendar and Habits</li>
						</ul>
					</li>
					<li className="feature">Mobile App ( possibly ) using React Native</li>
					<li className="feature">Efficient Mosaic or User-adjustable Dashboard UI -- last because I may not be able to
						do this without the help of someone else.
					</li>
				</ul>
			</div>
		</section>
		<section className="section">
			<h2 className="section-header">Notes and other things...</h2>
			<div className="section-content">
				<p className="text">
					This project is constantly changing. Please see <a className="external-link"
					                                                   href="https://github.com/devchrisio/webapp">the project's
					GitHub repo for more detailed information</a>
				</p>
				<p className="text">
					I'm currently working on learning multiple different skills at the moment including
					version control using git, writing reusable code, and learning to use SCSS
					for faster CSS. I'm also building on my knowledge of using multiple different APIs,
					working with ReactJS, Redux, and Firebase. Should you stumble across this and have any
					advice/critique please email me at <a className="external-link"
					                                      href="mailto:chris@devchris.io">chris@devchris.io</a>.
				</p>
			</div>
		</section>
	</div>
);

export default Home;

