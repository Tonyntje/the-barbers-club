import { development, mollieKey, mollieKeyTest } from "@/app/api/services/apiSettings";
import { Service } from "./types";

const paymentApi = development ? mollieKeyTest : mollieKey;

export const createPayment = async (amount: number, service: string, bookingDetails: any) => {
  try {
    const orderDetails = JSON.stringify({
      amount: {
        currency: "EUR",
        value: `${amount}.00`,
      },
      description: `Aanbetaling voor de dienst ${service}`,
      redirectUrl: "https://www.thebarbersclub.nl/bedankt",
      metadata: {
        booking: JSON.stringify(bookingDetails)
      }
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Authorization", `Bearer ${paymentApi}`);

    const response = await fetch(
      "https://api.mollie.com/v2/payments",
      {
        method: "POST",
        headers: myHeaders,
        body: orderDetails,
        redirect: "follow",
      },
    );
    
    const paymentData = await response.json();
    return paymentData;
  } catch (error) {
    console.error("Payment creation error:", error);
    throw new Error("Failed to create payment");
  }
};