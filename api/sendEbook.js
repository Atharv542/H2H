import SibApiV3Sdk from "sib-api-v3-sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    // AUTH
    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // SEND EMAIL
    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart" },
      to: [{ email }],
      subject: "Your Free Life Transformation Workbook",
      htmlContent: `
        <h2>Your Free Workbook is Ready!</h2>
        <p>Thank you for requesting the Life Transformation Workbook.</p>
        <p>You can download your workbook instantly using the link below:</p>
        <a href="https://www.head2heart.co.nz/ebooks/life-transformation-workbook.pdf"
          style="padding: 10px 20px; background: #6d28d9; color: white; border-radius: 8px; text-decoration:none;">
          Download Workbook
        </a>
        <br><br>
        <p>Warm regards,<br/>The Head2Heart Team</p>
      `,

      // OPTIONAL: attach the PDF directly
      attachment: [
        {
          url: "https://www.head2heart.co.nz/ebooks/life-transformation-workbook.pdf"
        }
      ],
    });

    res.status(200).json({ success: true });

  } catch (err) {
    console.error("Brevo error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
