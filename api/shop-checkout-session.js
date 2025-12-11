import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { item } = req.body; // no JSON.parse

  const priceMap = {
    product1:"price_1ScPq7CSe0ZSreoR8nUULEQM",
    product2:"price_1ScPqdCSe0ZSreoRlOlBO9ER",
    product3:"price_1ScPr5CSe0ZSreoRwB3kUPNq",
    product4:"price_1ScPraCSe0ZSreoRTfxl8VQn",
  };

  const priceId = priceMap[item];

  if (!priceId) {
    return res.status(400).json({ error: "Invalid item selected" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url:"https://h2-h-one.vercel.app/success?session_id={CHECKOUT_SESSION_ID}", // temporary placeholder
      cancel_url: "https://h2-h-one.vercel.app/",   // temporary placeholder
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
