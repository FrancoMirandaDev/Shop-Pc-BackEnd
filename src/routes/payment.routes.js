import { Router } from "express";
import {
  PaymentControllerStripe,
  PaymentControllerMercado,
} from "../controllers/payment.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Payment
 *  description: Payment endpoints
 */

/**
 * @swagger
 * /api/paymentStripe:
 *  post:
 *    summary:  Create a checkout session for Stripe
 *    tags: [Payment]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              cartItems:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                    quantity:
 *                      type: number
 *                required:
 *                  - id
 *                  - quantity
 *                example:
 *                  - id: 3
 *                    quantity: 10
 *
 *
 *    responses:
 *      200:
 *        description: Creado
 *      400:
 *        description: Bad request
 *      500:
 *        description: Error
 *
 */
router.post("/api/paymentStripe", PaymentControllerStripe);

/**
 * @swagger
 * /api/paymentMercado:
 *  post:
 *    summary:  Create a checkout session for Mercado Pago
 *    tags: [Payment]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              cartItems:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                    quantity:
 *                      type: number
 *                required:
 *                  - id
 *                  - quantity
 *                example:
 *                  - id: 3
 *                    quantity: 10
 *
 *
 *    responses:
 *      200:
 *        description: Creado
 *      400:
 *        description: Bad request
 *      500:
 *        description: Error
 *
 */
router.post("/api/paymentMercado", PaymentControllerMercado);

export default router;
