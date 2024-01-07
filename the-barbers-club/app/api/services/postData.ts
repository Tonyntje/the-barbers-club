import { apiEndpoint, apiKey } from "@/app/api/services/apiSettings";

async function postData() {
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey && { Authorization: apiKey }),
      },
      body: JSON.stringify({
        name: "New User",
        email: "new.user@example.com",
        service: "New Product",
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
}
