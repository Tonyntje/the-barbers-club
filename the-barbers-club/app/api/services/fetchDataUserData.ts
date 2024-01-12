import { apiKey, bookingApiEndpoint } from "@/app/api/services/apiSettings";

export const fetchDataUserData = async (orderNumber: string) => {
  try {
    const response = await fetch(bookingApiEndpoint, {
      method: "GET",
      headers: {
        ...(apiKey && { Authorization: apiKey }),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const orderData = await response.json();

    if (!Array.isArray(orderData))
      throw new Error(`HTTP error! Status: ${response.status}`);

    // Found Data
    return orderData.find((order) => order.id === orderNumber);
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
  }
};
