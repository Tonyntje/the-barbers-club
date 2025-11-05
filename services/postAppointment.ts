type GetDatesType = {
  startFormatted: string;
  name: string;
  service: string;
  time: string;
  endFormatted: string;
};

export async function postAppointment({
  startFormatted,
  name,
  service,
  time,
  endFormatted,
}: GetDatesType) {
  const currentHost = "http://" + window.location.host + "/api/events/";

  const body = {
    summary: `Afspraak met ${name}`,
    description: `${service} om ${time}`,
    start: {
      dateTime: startFormatted,
      timeZone: "Europe/Amsterdam",
    },
    end: {
      dateTime: endFormatted,
      timeZone: "Europe/Amsterdam",
    },
    status: "confirmed",
  };

  try {
    const getDates = await fetch(currentHost);
    const jsonDates = await getDates.json();

    const alreadyBooked = jsonDates.some(
      (date: { start: { dateTime: string } }) => {
        return date.start.dateTime === startFormatted;
      },
    );

    if (alreadyBooked) throw new Error("Already Booked");

    const response = await fetch(currentHost, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}
