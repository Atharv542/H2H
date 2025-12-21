import SibApiV3Sdk from "sib-api-v3-sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      position,
      teamSize,
      message
    } = req.body;

    // AUTH
    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // SEND EMAIL TO ADMIN (info@head2heart)
    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart Website" },
      to: [{ email: "info@head2heart.co.nz" }],
      replyTo: { email },
      subject: "New Corporate Program Inquiry",
      htmlContent: `
        <h2>New Corporate Inquiry Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${position}</p>
        <p><strong>Team Size:</strong> ${teamSize}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>

        <hr/>
        <p>This inquiry was submitted via the Head2Heart website contact form.</p>
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Brevo error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
