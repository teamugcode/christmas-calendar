import React, { useState } from "react";
import { arraysAreEqual, randomizedDoors } from "../helpers";
import Door from "./Door";

const Calendar = () => {
	const [doors, setDoors] = useState(randomizedDoors);

	// Define variable to handle door numbers saved to localStorage
	let savedDoorNumbers = [];

	// Get opened door numbers saved to localStorage
	if (localStorage.getItem("savedDoorNumbers" || [])) {
		savedDoorNumbers = JSON.parse(
			localStorage.getItem("savedDoorNumbers" || [])
		);
	}

	// Update locally opened doors from localStorage to the state
	if (savedDoorNumbers && savedDoorNumbers.length > 0) {
		// Create copy from doors array
		const updatedDoors = doors;

		// Loop saved door numbers and update them to the new array
		savedDoorNumbers.forEach((savedDoorNumber) => {
			const index = updatedDoors.findIndex(
				(door) => door.num === savedDoorNumber
			);
			updatedDoors[index].isOpen = true;
		});

		/*
		 * Note: without arraysAreEqual check set state would cause infinite loop
		 */
		if (!arraysAreEqual(updatedDoors, doors)) {
			// Update saved doors to the state if they do not have same values
			setDoors(updatedDoors);
		}
	}

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

		// Save opened door number to localStorage
		const openedDoorNumber = updatedDoors.find(
			(door) => door.num === clickedDoorNum
		).num;

		if (!savedDoorNumbers.includes(openedDoorNumber)) {
			// Add opened door to savedDoorNumbers array
			savedDoorNumbers.push(openedDoorNumber);

			// Set array to localStorage to save multiple values to same key
			localStorage.setItem(
				"savedDoorNumbers",
				JSON.stringify(savedDoorNumbers)
			);
		}
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
