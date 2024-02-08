import { Router } from "express";
import {
  PaymentControllerStripe,
  PaymentControllerMercado,
  PaymentControllerRecived,
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/api/paymentStripe", PaymentControllerRecived);

router.get("/api/paymentStripe", PaymentControllerStripe);

router.get("/api/paymentMercado", PaymentControllerMercado);

export default router;
