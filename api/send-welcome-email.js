import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, name } = req.body;

     const transporter = nodemailer.createTransport({
  host:process.env.SMTP_HOST,
  port: 587,
  secure: false, // false for TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // allows self-signed certs
  },
});


    await transporter.sendMail({
      from: `"Head2Heart Coaching" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Head2Heart 💙",
      html: `
        <h2 style="color:#4f46e5">Welcome ${name} 💙</h2>
        <p>Thanks for joining Head2Heart! Your transformation journey begins now.</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email Send Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
