import {apiKey, bookingApiEndpoint} from "@/app/api/services/apiSettings";
import type {DataType} from "@/app/api/booking/route";

const getOptions = {
	method: "GET",
	headers: {
		...(apiKey && { Authorization: apiKey }),
	},
};

export const fetchDataUserData = async (
	orderNumber: string,
): Promise<DataType | undefined> => {
	try {
		const response = await fetch(bookingApiEndpoint, getOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const orderData: DataType[] = await response.json();
		return orderData.find((order) => order.id === orderNumber);
	} catch (error: unknown) {
		console.error("Error fetching data:", error);
	}
};
