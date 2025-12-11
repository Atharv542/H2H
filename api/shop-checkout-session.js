import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { item } = req.body;

  const priceMap = {
    product1: {
      id: "price_1Sd80cCSe0ZSreoRbGprv180",
      name: "Transform Your Life Workbook",
    },
    product2: {
      id: "price_1ScPqdCSe0ZSreoRlOlBO9ER",
      name: "Daily Reflection Journal",
    },
    product3: {
      id: "price_1ScPr5CSe0ZSreoRwB3kUPNq",
      name: "Goal Setting Planner",
    },
    product4: {
      id: "price_1ScPraCSe0ZSreoRTfxl8VQn",
      name: "Affirmation Cards Set",
    },
  };

  const selected = priceMap[item];

  if (!selected) {
    return res.status(400).json({ error: "Invalid item selected" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{ price: selected.id, quantity: 1 }],
      success_url:
        "https://www.head2heart.co.nz/shop-success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://www.head2heart.co.nz/",
      metadata: {
        productName: selected.name, // ✔️ Correct product name added
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
