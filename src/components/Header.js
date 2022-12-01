import React from "react";

const Header = () => {
	const day = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();

	const currentDay = day + "." + (month + 1) + "." + year;

	return (
		<header className="App-header">
			<h1 className="title">Happy Christmas Waiting!</h1>
			<p className="subline">Today it's {currentDay}.</p>
			<p className="subline">
				Enjoy positive or inspirational thoughts by opening the calendar
				doors!
			</p>
		</header>
	);
};

export default Header;
