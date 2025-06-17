export async function getAccessToken() {
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.PRIVATE_KEY!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });

  const data = await tokenRes.json();

  if (!tokenRes.ok) {
    console.error(data);
    throw new Error("Failed to refresh access token");
  }

  return data.access_token;
}
