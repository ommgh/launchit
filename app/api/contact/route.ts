import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { services, budget, name, email, details } = body;

    const { data, error } = await resend.emails.send({
      from: "inquiry@launchit.today",
      to: ["om.works01@gmail.com", "kushalbhana2050@gmail.com"],
      subject: "New Project Inquiry",
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Selected Services:</strong> ${services.join(", ")}</p>
        <p><strong>Selected Package:</strong> ${budget}</p>
        <p><strong>Project Details:</strong></p>
        <p>${details || "No details provided"}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
