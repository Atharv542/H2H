import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { item, userName } = req.body;

  /* ---------------- PRICE MAP ---------------- */

  const priceMap = {
    service1: "price_1SZq6SCSe0ZSreoRHh1ve6rd",
    service2: "price_1SZq78CSe0ZSreoR1jSzMgtt",
    service3: "price_1SZmYwCSe0ZSreoR1UEBwnhD",
    service4: "price_1SZmanCSe0ZSreoRDf5wsUbu",
    service5: "price_1SZmbFCSe0ZSreoRGWwbkinP",
    service6: "price_1SgimyCSe0ZSreoRv54jLeZ6",
    service7: "price_1SgjG1CSe0ZSreoR7P2qE5tK",
    service8: "price_1Sgio2CSe0ZSreoRou0zr5zc",
    service9: "price_1SgioRCSe0ZSreoR8tnstFKB",
    service10: "price_1SgiotCSe0ZSreoRYZbONf7l",
    service11: "price_1SgipCCSe0ZSreoRJNAn5Azu",
    service12: "price_1SgipSCSe0ZSreoRcF1Hnc6K",
    service13: "price_1SgipmCSe0ZSreoRjfCOHvnA",
    service14: "price_1Sgiq5CSe0ZSreoRhropzCdo",
  };

  /* ---------------- SERVICE NAME MAP ---------------- */

  const serviceNameMap = {
    service1: "Transform Your Life",
    service2: "Mindful Reset",
    service3: "Emotional Healing",
    service4: "Inner Balance",
    service5: "Stress Release",
    service6: "Transform Your Life",
    service7: "Transform Your Life – Deep Dive",
    service8: "Confidence Building",
    service9: "Relationship Clarity",
    service10: "Purpose Discovery",
    service11: "Mindfulness Coaching",
    service12: "Life Alignment Session",
    service13: "Self Discovery Session",
    service14: "Leadership Coaching",
  };

  const priceId = priceMap[item];
  const serviceName = serviceNameMap[item];

  if (!priceId || !serviceName) {
    return res.status(400).json({ error: "Invalid service selected" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],

      success_url:
        "https://www.head2heart.co.nz/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://www.head2heart.co.nz/",

      /* 🔥 METADATA (CRITICAL) */
      metadata: {
        serviceName,
        userName: userName || "N/A",
        serviceId: item,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return res.status(500).json({ error: error.message });
  }
}
