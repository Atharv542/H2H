import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const { sessionId } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.json({ verified: false });
    }

    const lineItem = await stripe.checkout.sessions.listLineItems(sessionId);

    const priceId = lineItem.data[0].price.id;

    const mapping = {
      "price_1ScPq7CSe0ZSreoR8nUULEQM": "product1",
      "price_1ScPqdCSe0ZSreoRlOlBO9ER": "product2",
      "price_1ScPr5CSe0ZSreoRwB3kUPNq": "product3",
      "price_1ScPraCSe0ZSreoRTfxl8VQn": "product4",
    };

    res.json({
      verified: true,
      productId: mapping[priceId] || null,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
