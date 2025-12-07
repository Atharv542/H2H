import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: "Missing data" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // SSL for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Head2Heart Coaching" <info@head2heart.co.nz>`,
      to: email,
      subject: "Welcome to Head2Heart 💙",
      html: `
        <h2 style="color:#4f46e5">Welcome ${name} 💙</h2>
        <p>Your transformation journey with <strong>Head2Heart</strong> has officially begun!</p>
        <p>We're excited to have you on board. Let's unlock your true potential together.</p>
        <br/>
        <p>Warm regards,<br/>Team Head2Heart</p>
      `,
    });

    return res.status(200).json({ message: "Welcome email sent" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Failed to send welcome email" });
  }
}
