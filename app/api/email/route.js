import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse JSON from the request body
    const { name, email, subject, message } = await req.json();

    console.log("Sample request body:", name, email, subject, message);

    // Validate incoming data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or another email service like Yahoo, Outlook, etc.
      auth: {
        user: process.env.NEXT_PUBLIC_USER_EMAIL, // Your email
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your email app password
      },
    });

    // Compose the email
    const mailOptions = {
      from: `${name} <${email}>`,
      to: "manish.ramchandani@outlook.in", // Recipient's email
      subject: subject || "New Contact Form Submission",
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("email sent successfully");

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email. Please try again later." }),
      { status: 500 }
    );
  }
}
