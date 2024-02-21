import { stripe, MercadoPago } from "../helper/Methods_Payments.js";
export const PaymentControllerStripe = async (req, res) => {
  // Array with products
  const { cartItems } = req.body;
  console.log(cartItems);

  // Create a checkout session
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1Obm8SDBBkSAQk6rEK7ZdHa0",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/store",
  });

  res.send({ url: session.url });
};

export const PaymentControllerMercado = async (req, res) => {
  // Array with products
  const { cartItems } = req.body;
  console.log(cartItems);

  // Create a checkout session
  const preference = MercadoPago();
  const result = await preference.create({
    body: {
      items: [
        {
          title: "Samsung Galaxy Book 3",
          quantity: 1,
          unit_price: 100,
        },
      ],
    },
  });

  res.send({ url: result.init_point });
};
