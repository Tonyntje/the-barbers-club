"use server";

import {
  development,
  mollieKey,
  mollieKeyTest,
} from "@/app/api/services/apiSettings";
import { v4 as uuidv4 } from "uuid";

import createMollieClient from "@mollie/api-client";

export const createPayment = async (amount: number, service: string) => {
  const paymentApi = development ? mollieKeyTest : mollieKey;
  const mollieClient = createMollieClient({ apiKey: paymentApi });

  // const orderDetails = JSON.stringify({
  //   amount: {
  //     currency: "EUR",
  //     value: `${amount}.00`,
  //   },
  //   description: `Aanbetaling voor de dienst ${service}`,
  //   redirectUrl: "https://www.thebarbersclub.nl/bedankt",
  // });
  //
  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Access-Control-Allow-Origin", "*");
  // myHeaders.append("Authorization", `Bearer ${paymentApi}`);
  //
  // const createPayment = await fetch("https://api.mollie.com/v2/payments", {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: orderDetails,
  //   redirect: "follow",
  // }).then((response) => response.text());

  const payment = await mollieClient.payments.create({
    amount: {
      currency: "EUR",
      value: `${amount}.00`,
    },
    description: `Aanbetaling voor de dienst ${service}`,
    redirectUrl: "https://www.thebarbersclub.nl/bedankt",
    metadata: {
      order_id: uuidv4,
    },
  });

  return payment.getCheckoutUrl();
};
