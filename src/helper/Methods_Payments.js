import Stripe from "stripe";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const stripe = new Stripe(process.env.STRIPE_SECRET_PASSWORD);

export function MercadoPago() {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
  });

  const preference = new Preference(client);
  return preference;
}
