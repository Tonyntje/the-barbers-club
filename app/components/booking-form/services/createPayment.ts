"use server";

import {
  development,
  mollieKey,
  mollieKeyTest,
} from "@/app/api/services/apiSettings";
import { v4 as uuidv4 } from "uuid";

import createMollieClient from "@mollie/api-client";
import { Service } from "@/app/machine/constants";

export const createPayment = async (
  { amount, service }: Service,
  { name, date, time },
) => {
  const paymentApi = development ? mollieKeyTest : mollieKey;
  const mollieClient = createMollieClient({ apiKey: paymentApi });

  const payment = await mollieClient.payments.create({
    amount: {
      currency: "EUR",
      value: `${amount}.00`,
    },
    description: `Aanbetaling voor "${service}" - ${name} | Op ${date} om ${time}`,
    redirectUrl: `https://www.thebarbersclub.nl/bedankt?name=${name}&date=${date}&time=${time}`,
    metadata: {
      order_id: uuidv4,
    },
  });

  return payment.getCheckoutUrl();
};
