import SibApiV3Sdk from "sib-api-v3-sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, name } = req.body;

    // Authenticate with Brevo API Key
    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // Email HTML Template
    const htmlContent = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color:#ffffff;">

    <!-- Preheader (hidden preview text) -->
    <span style="display:none; font-size:1px; color:#ffffff; opacity:0;">
      A warm welcome to Head2Heart — we’re grateful you’re here.
    </span>

    <div style="max-width:600px; margin:0 auto; padding:24px;">

      <!-- Logo Header -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <!-- Circular Logo -->
                <td style="vertical-align: middle; padding-right:10px;">
                  <img
                    src="https://www.head2heart.co.nz/Logo6.png"
                    alt="Head2Heart Logo"
                    width="48"
                    height="48"
                    style="border-radius:50%; display:block;"
                  />
                </td>

                <!-- Text Logo -->
                <td style="vertical-align: middle;">
                  <img
                    src="https://www.head2heart.co.nz/New_Logo_3.png"
                    alt="Head2Heart"
                    height="32"
                    style="display:block;"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Divider -->
      <hr style="border:none; border-top:1px solid #eee; margin:16px 0 24px;" />

      <!-- Content -->
      <h2 style="color:#2f2f2f; font-weight:600; margin-bottom:16px;">
        Welcome to Head2Heart
      </h2>

      <p style="margin:0 0 16px;">
        Hi <strong>${name}</strong>,
      </p>

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

      <!-- CTA Button -->
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


    // Send Email Through Brevo
    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart" },
      to: [{ email, name }],
      subject: "Welcome to Head2Heart",
      htmlContent,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Brevo API error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
