import {development, mollieKey, mollieKeyTest,} from "@/app/api/services/apiSettings";

const paymentApi = development ? mollieKeyTest : mollieKey;

export const createPayment = async (amount: number, service: string) => {
	const orderDetails = JSON.stringify({
		amount: {
			currency: "EUR",
			value: `${amount}.00`,
		},
		description: `Aanbetaling voor de dienst ${service}`,
		redirectUrl: "https://www.thebarbersclub.nl/bedankt",
	});

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Access-Control-Allow-Origin", "*");
	myHeaders.append("Authorization", `Bearer ${paymentApi}`);

	const createPayment = await fetch(
		"https://api.mollie.com/v2/payments",
		{
			method: "POST",
			headers: myHeaders,
			body: orderDetails,
			redirect: "follow",
		},
	).then((response) => response.text());

	console.log(createPayment);
};
