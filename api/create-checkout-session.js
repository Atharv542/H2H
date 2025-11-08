import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { item } = req.body; // no JSON.parse

  const priceMap = {
    service1: "price_1SRDX1FuxMozvr1p0IhLIZ3r",
    service2: "price_1SRDX1FuxMozvr1p0IhLIZ3r",
    service3: "price_1SRDe8FuxMozvr1pUIcHJRCU",
    team4: "price_1SRDgfFuxMozvr1pPFR8zYA2",
    team5: "price_1SRDh4FuxMozvr1psu6bFykj",
    team6: "price_1SRDhaFuxMozvr1p4DscfAbQ",
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
