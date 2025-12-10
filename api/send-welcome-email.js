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
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

        <!-- Preheader (hidden text) -->
        <span style="display:none; font-size:1px; color:#ffffff; opacity:0;">
          Your new account is ready. Let’s help you connect with yourself.
        </span>

        <div style="max-width: 600px; margin: auto; padding: 20px;">
          
          <h2 style="color: #4a4a4a; font-weight: 600;">
            Welcome to Head2Heart — Your Wellness Journey Begins
          </h2>

          <p>Hi <strong>${name}</strong>,</p>

          <p>
            Welcome to <strong>Head2Heart Wellness</strong>.
            <br><br>
            Your account has been successfully created, and we’re honoured to be a part of your journey toward
            <strong>clarity, balance, and emotional wellbeing</strong>.
          </p>

          <p>
            Log in anytime:
            <br>
            <a 
              href="https://www.head2heart.co.nz/login" 
              style="display:inline-block; padding: 10px 16px; margin-top: 10px; background-color:#4a90e2; 
                     color:white; text-decoration:none; border-radius:6px;">
              Log In
            </a>
          </p>

          <br>

          <p>
            Warmly,<br>
            <strong>The Head2Heart Team</strong><br>
            Connect with yourself 🌿
          </p>

        </div>

      </body>
      </html>
    `;

    // Send Email Through Brevo
    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart" },
      to: [{ email, name }],
      subject: "Welcome to Head2Heart — Your Journey Starts Here",
      htmlContent,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Brevo API error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
