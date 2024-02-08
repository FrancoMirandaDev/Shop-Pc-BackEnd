import express from "express";
import cors from "cors";
import Stripe from "stripe";
import { MercadoPagoConfig, Payment } from "mercadopago";
import morgan from "morgan";
import flash from "connect-flash";
import session from "express-session";
import bodyParser from "body-parser";

import "./middlewares/passport.js";
import passport from "passport";

import routerIndex from "./routes/index.routes.js";
import routerAuth from "./routes/auth.routes.js";
import routerPayment from "./routes/payment.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

// Session

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport

app.use(passport.initialize());
app.use(passport.session());

// Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_PASSWORD);
//console.log(stripe);

// MercadoPago
const clientMP = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

const payment1 = new Payment(clientMP);
//console.log(await payment1);

// Buscar en documentacion , ultima implementacion para que funcione
// Posible error en el pasado de server a payment
// Declarrar todo en payment
// o revisar documentacion or video de fazt

export { stripe, payment1 };

// Routes
app.use(routerIndex);
app.use(routerAuth);
app.use(routerPayment);

export default app;
