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
                    width="48"
                    height="48"
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
        head2heart product bought!
      </h2>

      <!-- Body -->
      <p style="margin:0 0 16px;">
        Hi <strong>H2H Team</strong>,
      </p>

      <p style="margin:0 0 16px;">
        A new product has been purchased-
        <strong>${productName}</strong>.
      </p>

      <p style="margin:0 0 8px;">
        <strong>Booking Details:</strong>
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr>
          <td style="padding:6px 0;"><strong>User Email:</strong></td>
          <td style="padding:6px 0;">${customerEmail}</td>
        </tr>
        
      </table>


      <!-- Footer -->
      <p style="margin-top:24px;">
        Thank you,<br />
        <strong>head2heart team</strong>
        <span style="color:#6b7280;">Connect with yourself 🌿</span>
      </p>

    </div>
  </body>
</html>`;

    // 2️⃣ Map productName → PDF file
    const pdfFiles = {
      "Daily Reflection Journal": "H2H Daily Reflection Log Workbook  v0.1.pdf",
      "Goal Setting Planner": "H2H Goal setting plannner Workbook.pdf",
      "MINDFUL DAILY LOG": "H2H Mindful daily log workbook.pdf",
      "DAILY WINNING ROUTINES": "H2H Daily winning habits workbook.pdf",
      "BUILD MOTIVATION": "H2H BUILD MOTIVATION Workbook  v0.1.pdf",
      "5 Min Simple Morning Practices": "H2H Morning Practice Workbook.pdf",
      "Fixed Mindset vs Growth Mindset": "H2H Fixed vs. Growth Mindset Workbook.pdf",
      "A Night Routine Worksheet": "H2H Night Routine Workbook.pdf",
      "A Morning Routine Worksheet": "H2H Morning Practice Workbook.pdf",
      "An Attitude Worksheet": "H2H Winning Attitude Workbook.pdf",
      "A Law of Attraction Worksheet": "H2H Law of Attraction Workbook.pdf",
      "A Paradigm Shift Worksheet": "H2H Paradigm Shift Workbook.pdf",
      "Personal Development Worksheet": "H2H Personal Development Workbook.pdf",
      "Mindfulness Worksheet": "H2H Mindfulness Practice Workbook.pdf",
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
      htmlContent: `<p>Thank you for your purchase.The details of your order is given below:</p>
                    <p>You bought: <strong>${productName}</strong></p>
                    <p>Attached is your eBook.</p>`,
      attachment: [
        {
          content: pdfBuffer.toString("base64"),
          name: pdfFile,
        },
      ],
    });

    await emailApi.sendTransacEmail({
      sender: { name: "Head2Heart System", email: "info@head2heart.co.nz" },
      to: [{ email: "info@head2heart.co.nz" }],
      subject: `head2heart product purchase -${productName}`,
      htmlContent

    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
