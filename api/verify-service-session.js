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

    /* ================= USER EMAIL ================= */

    await emailApi.sendTransacEmail({
      sender: { name: "Head2Heart", email: "info@head2heart.co.nz" },
      to: [{ email: userEmail }],
      subject: "Your Session Is Confirmed – Head2Heart",
      htmlContent: `
        <h2>Thank you, ${userName} 🌿</h2>

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
      subject: "New Service Booking Received",
      htmlContent: `
        <h3>New Booking Alert 🚀</h3>

        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Service Purchased:</strong> ${serviceName}</p>
        <p><strong>Amount Paid:</strong> $${amountPaid}</p>

        <br/>
        <p>Please reach out to the client for scheduling.</p>
      `,
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
