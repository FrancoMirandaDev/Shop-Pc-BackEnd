import express from "express";
import cors from "cors";

import morgan from "morgan";
import flash from "connect-flash";
import session from "express-session";
import bodyParser from "body-parser";

// Passport
import "./middlewares/passport.js";
import passport from "passport";

// Routes
import routerIndex from "./routes/index.routes.js";
import routerAuth from "./routes/auth.routes.js";
import routerPayment from "./routes/payment.routes.js";

// Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions.js";

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

// Swagger
const specs = swaggerJsDoc(options);

// Routes
app.use(routerIndex);
app.use(routerAuth);
app.use(routerPayment);

//Swagger
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
