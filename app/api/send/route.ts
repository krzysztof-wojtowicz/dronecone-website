import { EmailTemplate } from "@/app/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  const { email, firstName, lastName, localization, service, message } = data;

  try {
    const data = await resend.emails.send({
      from: "DroneCone <noreply@dronecone.pl>",
      to: [email],
      bcc: ["kontakt@dronecone.pl"],
      subject: "Dziękujemy za przesłanie formularza",
      react: EmailTemplate({
        firstName: firstName,
        lastName: lastName,
        localization: localization,
        service: service,
        message: message,
        email: email,
      }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
