export const randomDoors = [
	{
		text: "Calendar door example text 1",
	},
	{
		text: "Calendar door example text 2",
	},
	{
		text: "Calendar door example text 3",
	},
	{
		text: "Calendar door example text 4",
	},
	{
		text: "Calendar door example text 5",
	},
	{
		text: "Calendar door example text 6",
	},
	{
		text: "Calendar door example text 7",
	},
	{
		text: "Calendar door example text 8",
	},
	{
		text: "Calendar door example text 9",
	},
	{
		text: "Calendar door example text 10",
	},
	{
		text: "Calendar door example text 11",
	},
	{
		text: "Calendar door example text 12",
	},
	{
		text: "Calendar door example text 13",
	},
	{
		text: "Calendar door example text 14",
	},
	{
		text: "Calendar door example text 15",
	},
	{
		text: "Calendar door example text 16",
	},
	{
		text: "Calendar door example text 17",
	},
	{
		text: "Calendar door example text 18",
	},
	{
		text: "Calendar door example text 19",
	},
	{
		text: "Calendar door example text 20",
	},
	{
		text: "Calendar door example text 21",
	},
	{
		text: "Calendar door example text 22",
	},
	{
		text: "Calendar door example text 23",
	},
	{
		text: "Calendar door example text 24",
	},
]
	.map((item, index) => ({
		...item,
		num: index + 1,
		isOpen: false,
		rand: Math.random(),
	}))
	.sort((a, b) => a.rand - b.rand);
