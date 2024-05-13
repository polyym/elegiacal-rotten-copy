import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: `elegiacally.rotten`,
        pass: ``,
      },
    });

    const mailOptions = {
      from: email,
      to: 'elegiacally.rotten',
      subject: `Message from ${name}`,
      html: `
        <h3>Contact Form Submission</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", mailOptions);

    // Return a success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);

    // Return an error response
    return NextResponse.json({ success: false, error: "Error sending email" });
  }
}
