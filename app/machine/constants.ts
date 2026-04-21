export const services: Service[] = [
	{
		value: "men-cut",
		label: "Mannen knippen",
		price: 32.5,
		length: 45,
	},
	{
		value: "men-wash-cut-styling",
		label: "Mannen wassen,knippen & stylen",
		price: 39,
		length: 45,
	},
	{
		value: "men-cut-trim",
		label: "Mannen knippen & baard trimmen",
		price: 45,
		length: 60,
	},
	{
		value: "men-cut-shape",
		label: "Mannen knippen & baard reshape",
		price: 50,
		length: 60,
	},
	{
		value: "men-trim",
		label: "Mannen baard trimmen",
		price: 17.5,
		length: 30,
	},
	{
		value: "men-shape",
		label: "Mannen baard reshape",
		price: 22.5,
		length: 30,
	},
	{
		value: "men-contour-trim",
		label: "Mannen contouren & baard trimmen",
		price: 27.5,
		length: 45,
	},
	{
		value: "men-contour-reshape",
		label: "Mannen contouren & Baard reshape",
		price: 32.5,
		length: 45,
	},
	{
		value: "men-brow-edit",
		label: "Mannen wenkbrauwen bijwerken",
		price: 10,
		length: 15,
	},
	{
		value: "men-contouren",
		label: "Contouren",
		price: 12.5,
		length: 15,
	},
	{
		value: "men-wash",
		label: "Mannen wassen ",
		price: 5,
		length: 15,
	},
];

export const shopTimes: Times = [
	{ time: { from: 10, to: 16 }, label: "Maandag" },
	{ time: { from: 9, to: 17 }, label: "Dinsdag" },
	{ time: { from: 10, to: 21 }, label: "Woensdag" },
	{ time: { from: 9, to: 21 }, label: "Donderdag" },
	{ time: { from: 9, to: 18 }, label: "Vrijdag" },
	{ time: { from: 8, to: 18 }, label: "Zaterdag" },
	{ time: "Gesloten", label: "Zondag" },
];

type Times = {
	time: { from: number; to: number } | "Gesloten";
	label: string;
}[];

type Service = {
	readonly value: string;
	readonly label: string;
	readonly price: number;
	readonly length: number;
};
