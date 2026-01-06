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
      <h2>Verify your Head2Heart account</h2>
      <p>Hi ${name},</p>
      <p>Please verify your email to continue your journey.</p>
      <a href="${verificationLink}"
         style="padding:12px 18px;background:#4a90e2;color:#fff;border-radius:6px;text-decoration:none;">
        Verify Email
      </a>
      <p>This link expires automatically.</p>
    `;

    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart" },
      to: [{ email, name }],
      subject: "Verify your Head2Heart account",
      htmlContent,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification email failed" });
  }
}
