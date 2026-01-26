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
    const htmlContent = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; line-height:1.6; color:#333; background-color:#ffffff;">

    <!-- Preheader -->
    <span style="display:none; font-size:1px; color:#ffffff; opacity:0;">
      A new quote request has been submitted on Head2Heart.
    </span>

    <div style="max-width:600px; margin:0 auto; padding:24px;">

      <!-- Logo Header -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <!-- Circular Logo -->
                <td style="vertical-align:middle; padding-right:10px;">
                  <img
                    src="https://www.head2heart.co.nz/Logo6.png"
                    alt="Head2Heart Logo"
                    width="100"
                    height="100"
                    style="border-radius:50%; display:block;"
                  />
                </td>

                <!-- Text Logo -->
                <td style="vertical-align:middle;">
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

      <!-- Divider -->
      <hr style="border:none; border-top:1px solid #eee; margin:16px 0 24px;" />

      <!-- Heading -->
      <h2 style="color:#2f2f2f; font-weight:600; margin-bottom:16px;">
        New Quote Request Received
      </h2>

      <!-- Body -->
      <p style="margin:0 0 16px;">
        Hi <strong>H2H Team</strong>,
      </p>

      <p style="margin:0 0 16px;">
        A new quote has been requested for a service.  
        Please find the details below:
      </p>

      <!-- Details Table -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-bottom:16px;">
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Name</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Phone</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Company</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${company || "-"}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Job Title</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${position || "-"}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Team Size</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${teamSize || "-"}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd; vertical-align:top;">
            <strong>Message</strong>
          </td>
          <td style="padding:8px; border:1px solid #ddd; white-space:pre-line;">
            ${message}
          </td>
        </tr>
      </table>

      <p style="margin:0 0 24px;">
        Please get back to the client as soon as possible.
      </p>

      <!-- Footer -->
      <p style="margin-top:24px;">
        Kind regards,<br />
        <strong>head2heart team</strong>
         <span style="color:#6b7280;">Connect with yourself 🌿</span>
      </p>

    </div>
  </body>
</html>
`;

const htmlContent2 = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; line-height:1.6; color:#333; background-color:#ffffff;">

   

    <div style="max-width:600px; margin:0 auto; padding:24px;">

      <!-- Logo Header -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <!-- Circular Logo -->
                <td style="vertical-align:middle; padding-right:10px;">
                  <img
                    src="https://www.head2heart.co.nz/Logo6.png"
                    alt="Head2Heart Logo"
                    width="100"
                    height="100"
                    style="border-radius:50%; display:block;"
                  />
                </td>

                <!-- Text Logo -->
                <td style="vertical-align:middle;">
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

      <!-- Divider -->
      <hr style="border:none; border-top:1px solid #eee; margin:16px 0 24px;" />

      <!-- Heading -->
      <h2 style="color:#2f2f2f; font-weight:600; margin-bottom:16px;">
        Hi <strong>${firstName}</strong>,
      </h2>

      <!-- Body -->
      <p style="margin:0 0 16px;">
        Thank you so much for reaching out to us.    
      </p>

      <p style="margin:0 0 16px;">
        
        Please find the details below:
      </p>

      <!-- Details Table -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-bottom:16px;">
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Name</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Phone</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Company</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${company || "-"}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Job Title</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${position || "-"}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;"><strong>Team Size</strong></td>
          <td style="padding:8px; border:1px solid #ddd;">${teamSize || "-"}</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd; vertical-align:top;">
            <strong>Message</strong>
          </td>
          <td style="padding:8px; border:1px solid #ddd; white-space:pre-line;">
            ${message}
          </td>
        </tr>
      </table>

      <p style="margin:0 0 24px;">
        We’ll take a gentle look through everything and come back to you within the next 24–48 hours.
      </p>
      <p style="margin:0 0 24px;">
        If you’d like to connect with us in the meantime, you’re always welcome to email us at info@head2heart.co.nz.
      </p>
      <p style="margin:0 0 24px;">
        We truly appreciate your patience, and we look forward to speaking with you soon.
      </p>

      <!-- Footer -->
      <p style="margin-top:24px;">
        Kind regards,<br />
        <strong>head2heart team</strong>
         <span style="color:#6b7280;">Connect with yourself 🌿</span>
      </p>

    </div>
  </body>
</html>
`;

    // SEND EMAIL TO ADMIN (info@head2heart)
    await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart Website" },
      to: [{ email: "info@head2heart.co.nz" }],
      replyTo: { email },
      subject: "Enquiry received by head2heart ",
      htmlContent,
    });

     await apiInstance.sendTransacEmail({
      sender: { email: "info@head2heart.co.nz", name: "Head2Heart Website" },
      to: [{ email:email }],
      replyTo: { email },
      subject: "Quote request received",
      htmlContent:htmlContent2,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Brevo error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
