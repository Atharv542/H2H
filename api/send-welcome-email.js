import SibApiV3Sdk from "sib-api-v3-sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, name } = req.body;

    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart" },
      to: [{ email, name }],
      subject: "Welcome to Head2Heart!",
      htmlContent: `
        <h2>Welcome, ${name}!</h2>
        <p>Thank you for signing up!</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Brevo API error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
