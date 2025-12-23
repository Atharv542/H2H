import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { item } = req.body;

  const priceMap = {
     product1: {
      id: "price_1ScPraCSe0ZSreoRTfxl8VQn",
      name: "Daily Reflection Journal",
    },
    product2: {
      id: "price_1ScPr5CSe0ZSreoRwB3kUPNq",
      name: "Goal Setting Planner",
      
    },
   
    product3: {
      id: "price_1ScPq7CSe0ZSreoR8nUULEQM",
      name: "MINDFUL DAILY LOG",
    },
    product4: {
      id: "price_1ScPraCSe0ZSreoRTfxl8VQn",
      name: "DAILY WINNING ROUTINES",
    },
      product5: {
      id: "price_1SeE5kCSe0ZSreoROn5N8xnl",
      name: "BUILD MOTIVATION",
    },
     product6: {
      id: "price_1SeE6QCSe0ZSreoReGeUZ30s",
      name: "5 Min Simple Morning Practices",
    },
     product7: {
      id: "price_1SeE6vCSe0ZSreoRy5olHk4D",
      name: "Fixed Mindset vs Growth Mindset",
    },
     product8: {
      id: "price_1SeE7GCSe0ZSreoR3uB2KxcI",
      name: "A Night Routine Worksheet",
    },
     product9: {
      id: "price_1SeE7cCSe0ZSreoRPAK1fGVR",
      name: "A Morning Routine Worksheet",
    },
     product10: {
      id: "price_1SeE7xCSe0ZSreoR91yyMCUG",
      name: "An Attitude Worksheet",
    },
     product11: {
      id: "price_1SeE8HCSe0ZSreoRfr3VvZdH",
      name: "A Law of Attraction Worksheet",
    },
     product12: {
      id: "price_1SeE90CSe0ZSreoRBO7a9H5f",
      name: "A Paradigm Shift Worksheet",
    },
     product13: {
      id: "price_1SeE9LCSe0ZSreoRnvwuamnR",
      name: "Personal Development Worksheet",
    },
     product14: {
      id: "price_1SeE9jCSe0ZSreoRRVZKBIgk",
      name: "Mindfulness Worksheet",
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
