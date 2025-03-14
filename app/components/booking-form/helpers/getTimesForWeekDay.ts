import { shopTimes } from "@/app/machine/constants";

export const getTimesForWeekDay = (date: Date = new Date()) => {
	const weekDayFromString = date.toDateString().split(" ")[0];
	const weekDayIndexes = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const dayIndex = weekDayIndexes.indexOf(weekDayFromString);
	const times = shopTimes[dayIndex]?.time;

	if (times && times !== "Gesloten") {
		const timeArray = [];
		for (let i = times.from; i <= times.to; i++) {
			timeArray.push(`${i}:00`, `${i}:15`, `${i}:30`, `${i}:45`);
		}
		return timeArray.map((times) => {
			return { flat: times.split(":").join(""), normal: times };
		});
	}

	return undefined;
};
