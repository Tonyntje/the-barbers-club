"use server";

import { google } from "googleapis";

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

export const initGoogleCalendar = async () => {
  try {
    const credentials = {
      client_id: process.env.CLIENT_ID,
      client_email: process.env.CLIENT_EMAIL,
      project_id: process.env.PROJECT_ID,
      private_key: process.env.PRIVATE_KEY,
    };
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: SCOPES,
    });

    const calendar = google.calendar({ version: "v3", auth });

    console.log("Google Calendar API initialized:");
    return calendar;
  } catch (error) {
    console.error("Error initializing Google Calendar API:", error);
  }
};
