import { stripe } from "../helper/Methods_Payments.js";

export const PaymentControllerStripe = async (req, res) => {
  const { cartItems } = req.body;
  console.log(cartItems);
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
  console.log("Paso por mercado pago controller");
  const products = await stripe.products.list();

  res.status(200).send({
    message: "List of Products in Mercado Pago",
    products: products.data.map((product) => product.name),
  });
};
