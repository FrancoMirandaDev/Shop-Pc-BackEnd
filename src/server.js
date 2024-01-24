import express from "express";
import cors from "cors";
import Stripe from "stripe";
import morgan from "morgan";
import flash from "connect-flash";
import session from "express-session";

import "./middlewares/passport.js";
import passport from "passport";

import routerIndex from "./routes/index.routes.js";
import routerAuth from "./routes/auth.routes.js";

const app = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_PASSWORD);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
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

// Routes
app.use(routerIndex);
app.use(routerAuth);

export default app;
