import React, { useState } from "react";
import { randomizedDoors } from "../helpers";
import Door from "./Door";

const Calendar = () => {
	const [doors, setDoors] = useState(randomizedDoors);

	const openDoor = (doorNum) => {
		console.log("openDoor", doorNum);
	};

	return (
		<>
			{doors.map((door) => (
				<Door
					key={door.num}
					{...door}
					onClick={() => {
						openDoor(door.num);
					}}
				/>
			))}
		</>
	);
};

export default Calendar;
