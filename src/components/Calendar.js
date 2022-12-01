import React, { useState } from "react";
import { randomizedDoors } from "../helpers";
import Door from "./Door";

const Calendar = () => {
	const [doors, setDoors] = useState(randomizedDoors);

	const openDoor = (clickedDoorNum) => {
		// Find clicked door index from doors array
		const currentDoorIndex = doors.findIndex(
			(door) => door.num === clickedDoorNum
		);

		/*
		 * Update clicked door isOpen value to true in doors array
		 * - Create new array
		 * - Add doors before current index with ...doors.slice(0, currentDoorIndex)
		 * - Add current door with open status with { ...doors[currentDoorIndex], isOpen: true },
		 * - Add doors after current index with ...doors.slice(currentDoorIndex + 1)
		 */
		const updatedDoors = [
			...doors.slice(0, currentDoorIndex),
			{ ...doors[currentDoorIndex], isOpen: true },
			...doors.slice(currentDoorIndex + 1),
		];

		// Set updated doors array to state
		setDoors(updatedDoors);
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
