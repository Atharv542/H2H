import admin from "firebase-admin";
import SibApiV3Sdk from "sib-api-v3-sdk";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    ),
  });
}


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name } = req.body;

    // 🔐 Generate Firebase verification link
    const verificationLink =
      await admin.auth().generateEmailVerificationLink(email, {
        url: "https://www.head2heart.co.nz/verify-waiting",
      });

    // 🔑 Brevo Auth
    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const htmlContent = `
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
       <!-- Header Logo Section -->
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
  <tr>
    <td align="center">
      <table cellpadding="0" cellspacing="0">
        <tr>
          
          <td style="vertical-align: middle; padding-right: 10px;">
            <img
              src="https://www.head2heart.co.nz/Logo6.png"
              alt="Head2Heart Logo"
              width="100"
              height="100"
              style="border-radius: 50%; display: block;"
            />
          </td>

          
          <td style="vertical-align: middle;">
            <img
              src="https://www.head2heart.co.nz/New_Logo_3.png"
              alt="Head2Heart"
              height="100"
              style="display: block;"
            />
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

      <h2 style="margin-bottom: 16px; color: #222;">
        Verify your Head2Heart account
      </h2>

      <p style="margin: 0 0 12px 0;">
        Hi <strong>${name}</strong>,
      </p>

      <p style="margin: 0 0 16px 0;">
        Thank you for registering with <strong>Head2Heart</strong>.
        To complete your registration process, please verify your email address
        by clicking the button below.
      </p>

      <!-- Button spacing -->
      <div style="margin: 28px 0; text-align: center;">
        <a
          href="${verificationLink}"
          style="
            display: inline-block;
            padding: 14px 24px;
            background-color: #4a90e2;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            font-size: 15px;
          "
        >
          Verify Email
        </a>
      </div>

      <p style="margin: 0 0 16px 0;">
        Once you have completed the registration, you will be able to log in and
        access the full Head2Heart experience.
      </p>

      <p style="margin: 0 0 24px 0;">
        If for any reason you are not redirected automatically after verification,
        please visit
        <a href="https://www.head2heart.co.nz" style="color: #4a90e2;">
          www.head2heart.co.nz
        </a>.
      </p>

      <p style="margin: 0;">
        Kind regards,<br />
        <strong>The Head2Heart Team</strong>
      </p>

    </div>
  </body>
</html>
`;

    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart" },
      to: [{ email, name }],
      subject: "Email verification from head2heart",
      htmlContent,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification email failed" });
  }
}
