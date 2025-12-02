import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { item } = req.body; // no JSON.parse

  const priceMap = {
    service1: "price_1SZq6SCSe0ZSreoRHh1ve6rd",
    service2: "price_1SZq78CSe0ZSreoR1jSzMgtt",
    service3: "price_1SZmYwCSe0ZSreoR1UEBwnhD",
    service4: "price_1SZmanCSe0ZSreoRDf5wsUbu",
    service5: "price_1SZmbFCSe0ZSreoRGWwbkinP",
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
