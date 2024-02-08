import { stripe, payment1 } from "../server.js";

export const PaymentControllerRecived = async (req, res) => {
  const { cartItems } = req.body;
  console.log(cartItems);
};

export const PaymentControllerStripe = async (req, res) => {
  const products = await stripe.products.list();

  res.status(200).send({
    message: "List of Products in Stripe",
    products: products.data.map((product) => product.name),
  });
};

export const PaymentControllerMercado = async (req, res) => {
  const products = await stripe.products.list();
  //console.log(await payment1);

  res.status(200).send({
    message: "List of Products in Mercado Pago",
    products: products.data.map((product) => product.name),
  });
};
