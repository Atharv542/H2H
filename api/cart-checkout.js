const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { cartItems, userId } = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: cartItems.map(item => ({
      price: item.priceId,
      quantity: item.quantity,
    })),
    success_url: `${process.env.FRONTEND_URL}/success`,
    cancel_url: `${process.env.FRONTEND_URL}/cart`,
    metadata: { userId },
  });

  res.json({ url: session.url });
}
