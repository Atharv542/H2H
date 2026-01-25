import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: "Missing email or name" });
    }

    // Email HTML Template (same as yours)
    const htmlContent = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color:#ffffff;">
    <span style="display:none; font-size:1px; color:#ffffff; opacity:0;">
      A warm welcome to Head2Heart — we’re grateful you’re here.
    </span>

    <div style="max-width:600px; margin:0 auto; padding:24px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align: middle; padding-right:10px;">
                  <img
                    src="https://www.head2heart.co.nz/Logo6.png"
                    alt="Head2Heart Logo"
                    width="100"
                    height="100"
                    style="border-radius:50%; display:block;"
                  />
                </td>
                <td style="vertical-align: middle;">
                  <img
                    src="https://www.head2heart.co.nz/New_Logo_3.png"
                    alt="Head2Heart"
                    height="100"
                    style="display:block;"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <hr style="border:none; border-top:1px solid #eee; margin:16px 0 24px;" />

      <h2 style="color:#2f2f2f; font-weight:600; margin-bottom:16px;">
        Welcome to Head2Heart
      </h2>

      <p style="margin:0 0 16px;">Hi <strong>${name}</strong>,</p>

      <p style="margin:0 0 16px;">
        A warm welcome to <strong>Head2Heart</strong>.<br />
        We’re truly grateful you’re here.
      </p>

      <p style="margin:0 0 16px;">
        At Head2Heart, we offer a gentle, supportive space where you can feel
        truly seen, heard, and understood. People are at the heart of everything
        we do, and we’re deeply committed to walking with you as you explore and
        transform your life’s journey.
      </p>

      <p style="margin:0 0 16px;">
        We believe that even the smallest step forward can create meaningful and
        lasting change. It’s an honour to be part of your path toward emotional
        and mental wellbeing, and we look forward to connecting with you soon.
      </p>

      <div style="text-align:center; margin:28px 0;">
        <a
          href="https://www.head2heart.co.nz/booking"
          style="
            display:inline-block;
            padding:14px 26px;
            background-color:#4a90e2;
            color:#ffffff;
            text-decoration:none;
            border-radius:6px;
            font-weight:600;
            font-size:15px;
          "
        >
          Book a Complimentary Session
        </a>
      </div>

      <p style="margin:0 0 16px;">
        If any questions come up, please feel free to reach out to us anytime at
        <a href="mailto:info@head2heart.co.nz" style="color:#4a90e2;">
          info@head2heart.co.nz
        </a>
        — we’re here for you.
      </p>

      <p style="margin-top:24px;">
        Warm regards,<br />
        <strong>Head2Heart Team</strong><br />
        <span style="color:#6b7280;">Connect with yourself 🌿</span>
      </p>
    </div>
  </body>
</html>
`;

    // Microsoft 365 SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.M365_SMTP_USER,
        pass: process.env.M365_SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Head2Heart" <info@head2heart.co.nz>`,
      to: `"${name}" <${email}>`,
      subject: "Welcome to Head2Heart",
      html: htmlContent,
      replyTo: "info@head2heart.co.nz",
    });

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("M365 SMTP error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
