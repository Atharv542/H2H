import Stripe from "stripe";
import SibApiV3Sdk from "sib-api-v3-sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({
      success: false,
      error: "No session ID provided",
    });
  }

  try {
    /* ---------------- STRIPE ---------------- */

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(400).json({
        success: false,
        error: "Payment not completed",
      });
    }

    /* ---------------- DATA ---------------- */

    const userEmail = session.customer_details?.email || "N/A";
    const userName = session.metadata?.userName || "N/A";
    const serviceName = session.metadata?.serviceName || "Unknown Service";
    const amountPaid = (session.amount_total / 100).toFixed(2);

    /* ---------------- BREVO ---------------- */

    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();
    const htmlContent = `
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

      <!-- Heading -->
      <h2 style="color:#2f2f2f; font-weight:600; margin-bottom:16px;">
        head2heart session confirmed!
      </h2>

      <!-- Body -->
      <p style="margin:0 0 16px;">
        Hi <strong>H2H Team</strong>,
      </p>

      <p style="margin:0 0 16px;">
        A new booking has been created for
        <strong>${serviceName}</strong>.
      </p>

      <p style="margin:0 0 8px;">
        <strong>Booking Details:</strong>
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr>
          <td style="padding:6px 0;"><strong>User Email:</strong></td>
          <td style="padding:6px 0;">${userEmail}</td>
        </tr>
        
      </table>

      <p style="margin:0 0 16px;">
        The Info Calendar has been updated with this booking.
      </p>

      <p style="margin:0 0 16px;">
        An invoice has been attached to this email and has also been sent to the user.
      </p>

      <!-- Footer -->
      <p style="margin-top:24px;">
        Thank you,<br />
        <strong>head2heart team</strong>
        <span style="color:#6b7280;">Connect with yourself 🌿</span>
      </p>

    </div>
  </body>
</html>`;

    /* ================= USER EMAIL ================= */

    await emailApi.sendTransacEmail({
      sender: { name: "Head2Heart", email: "info@head2heart.co.nz" },
      to: [{ email: userEmail }],
      subject: "Your Session Is Confirmed – Head2Heart",
      htmlContent: `
        <h2>Thank you,🌿</h2>

        <p>Your payment has been successfully received.</p>

        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Amount Paid:</strong> $${amountPaid}</p>

        <p>We’ll contact you shortly to schedule your session.</p>

        <br/>
        <p>Warm regards,<br/>
        <strong>Head2Heart Team</strong></p>
      `,
    });

    /* ================= ADMIN EMAIL ================= */

    await emailApi.sendTransacEmail({
      sender: { name: "Head2Heart System", email: "info@head2heart.co.nz" },
      to: [{ email: "info@head2heart.co.nz" }],
      subject: `head2heart session booking -${serviceName}`,
      htmlContent

    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Verify session error:", error);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
}
