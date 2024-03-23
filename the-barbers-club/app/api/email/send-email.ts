import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import WelcomeEmail from "@/emails/welcome";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await sendEmail({
    to: "tony_nieuwenhuijs@live.nl",
    subject: "Welcome to NextAPI",
    html: render(WelcomeEmail()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
