import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { item } = req.body; // no JSON.parse

  const priceMap = {
    service1: "prod_TNzdOfZanNxLZo",
    service2: "prod_TNzb0qWNTveL6V",
    service3: "prod_TNzdOfZanNxLZo",
    service4: "prod_TNzgkneqdkNG02",
    service5: "prod_TNzgN7Aiyu77H1",
    service6: "prod_TNzgsIKK3FPIN3",
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
      success_url: "http://localhost:3000/success", // temporary placeholder
      cancel_url: "http://localhost:3000/cancel",   // temporary placeholder
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
