import { apiKey, mollieKey, websiteURL } from "@/app/api/services/apiSettings";

export const createTransaction = async ({
  method,
}: {
  readonly method: "ideal" | "applepay";
}) => {
  console.log("testin");

  try {
    const response = await fetch("https://api.mollie.com/v2/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey && { Authorization: mollieKey }),
      },
      body: JSON.stringify({
        amount: { currency: "EUR", value: "1000.00" },
        description: "Knipbeurt bij The Barbers Club",
        redirectUrl: websiteURL + "/reservering-voltooid",
        cancelUrl: websiteURL + "/niet-gelukt",
        method,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("POST Response:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
