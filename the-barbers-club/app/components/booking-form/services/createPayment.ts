import {
  development,
  mollieKey,
  mollieKeyTest,
} from "@/app/api/services/apiSettings";

const paymentApi = development ? mollieKeyTest : mollieKey;

export const createPayment = (amount: number, service: string) => {
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
  myHeaders.append("Authorization", `Bearer ${paymentApi}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: orderDetails,
    redirect: "follow" as RequestRedirect,
  };

  fetch("https://api.mollie.com/v2/payments", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};
