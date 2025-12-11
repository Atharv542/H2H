import Stripe from "stripe";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { sessionId } = req.body;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // retrieve session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(400).json({ success: false });
    }

    const customerEmail = session.customer_details.email;
    const productName = session.metadata.productName; // ✔️ Comes from checkout session

    // Map product names to PDF files
    const pdfFiles = {
      "Transform Your Life Workbook": "daa.pdf",
      "Daily Reflection Journal": "DailyReflectionJournal.pdf",
      "Goal Setting Planner": "GoalSettingPlanner.pdf",
      "Affirmation Cards Set": "AffirmationCardsSet.pdf",
    };

    const pdfFile = pdfFiles[productName];

    if (!pdfFile) {
      return res.status(400).json({ error: "No PDF matched for product" });
    }

    const filePath = path.join(process.cwd(), "public", "ebooks", pdfFile);
    const pdfBuffer = fs.readFileSync(filePath);

    await resend.emails.send({
      from: "Head2Heart <no-reply@head2heart.co.nz>",
      to: customerEmail,
      subject: "Your eBook Purchase",
      html: `
        <p>Thank you for your purchase!</p>
        <p>You bought: <strong>${productName}</strong></p>
        <p>Your eBook is attached below.</p>
      `,
      attachments: [
        {
          filename: pdfFile,
          content: pdfBuffer.toString("base64"),
        },
      ],
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
}
