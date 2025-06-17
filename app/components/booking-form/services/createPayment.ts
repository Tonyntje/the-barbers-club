"use server";

import {
  development,
  mollieKey,
  mollieKeyTest,
} from "@/app/api/services/apiSettings";
import { v4 as uuidv4 } from "uuid";
import createMollieClient from "@mollie/api-client";
import { OrderDetails } from "@/app/components/booking-form/helpers/steps/Betalen";
import { Service } from "@/app/machine/constants";

export const createPayment = async (service: Service, user: OrderDetails) => {
  const paymentApi = development ? mollieKeyTest : mollieKey;
  const mollieClient = paymentApi && createMollieClient({ apiKey: paymentApi });

  const amount = service?.price;
  const serviceName = service?.label;
  const duration = service?.length;

  const name = user.name;
  const date = user.date;
  const time = user.time;

  const payment =
    mollieClient &&
    (await mollieClient.payments.create({
      amount: {
        currency: "EUR",
        value: `${amount}.00`,
      },
      description: `Aanbetaling voor "${serviceName}" - ${name} | Op ${date} om ${time}`,
      redirectUrl: `https://www.thebarbersclub.nl/reservering-voltooid?name=${name}&date=${date}&time=${time}&length=${duration}`,
      metadata: {
        order_id: uuidv4,
      },
    }));

  if (!payment) return;

  return payment.getCheckoutUrl();
};
