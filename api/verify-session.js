import Stripe from "stripe";
import SibApiV3Sdk from "sib-api-v3-sdk";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { sessionId } = req.body;

  if (!sessionId) return res.status(400).json({ success: false, error: "No session ID provided" });

  try {
    // 1️⃣ Verify Stripe payment
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(400).json({ success: false, error: "Payment not completed" });
    }

    const customerEmail = session.customer_details.email;
    const productName = session.metadata.productName;

    // 2️⃣ Map productName → PDF file
    const pdfFiles = {
      "Transform Your Life Workbook": "daa.pdf",
      "Daily Reflection Journal": "DailyReflectionJournal.pdf",
      "Goal Setting Planner": "GoalSettingPlanner.pdf",
      "Affirmation Cards Set": "AffirmationCardsSet.pdf",
    };

    const pdfFile = pdfFiles[productName];
    if (!pdfFile) return res.status(400).json({ success: false, error: "PDF not found" });

    const filePath = path.join(process.cwd(), "public", "ebooks", pdfFile);
    const pdfBuffer = fs.readFileSync(filePath);

    // 3️⃣ Send email via Brevo
    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    await apiInstance.sendTransacEmail({
      sender: { name: "Head2Heart", email: "no-reply@head2heart.co.nz" },
      to: [{ email: customerEmail }],
      subject: "Your eBook Purchase",
      htmlContent: `<p>Thank you for your purchase!</p>
                    <p>You bought: <strong>${productName}</strong></p>
                    <p>Attached is your eBook.</p>`,
      attachment: [
        {
          content: pdfBuffer.toString("base64"),
          name: pdfFile,
        },
      ],
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
