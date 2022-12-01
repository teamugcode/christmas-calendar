import React from "react";

const Door = (props) => {
	const { text, num, isOpen, onClick } = props;

	const today = new Date().getDate();
	const month = new Date().getMonth();

	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				/*
				 * Click only if:
				 * - Current number is today's day or larger
				 * - Month is december
				 */
				if (num <= today && onClick && month === 11) {
					onClick();
				}
			}}
			className={`door ${isOpen ? "open" : ""}`}
		>
			<p className="text">{isOpen ? text : `${num}`}</p>
		</button>
	);
};

export default Door;
