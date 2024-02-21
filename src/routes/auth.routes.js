import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/auth.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth endpoints
 */

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Login of user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *            required:
 *              - email
 *              - password
 *            example:
 *              email: Juan@example.com
 *              password: 123
 *    responses:
 *      200:
 *        description: Creado
 *      400:
 *        description: Bad request
 *      500:
 *        description: Error
 */
router.post("/login", loginUserController);

/**
 * @swagger
 * /signup:
 *  post:
 *    summary: Create a new user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              user_handle:
 *                type: string
 *              user_password:
 *                type: string
 *              email_address:
 *                type: string
 *              first_name:
 *                type: string
 *              last_name:
 *                type: string
 *              phonenumber:
 *                type: number
 *            required:
 *              - user_handle
 *              - user_password
 *              - email_address
 *              - first_name
 *              - last_name
 *              - phonenumber
 *            example:
 *              user_handle: user_Example
 *              user_password: 12345
 *              email_address: Juan@example.com
 *              first_name: User_Example
 *              last_name: User_Example
 *              phonenumber: 123456789
 *    responses:
 *      200:
 *        description: Creado
 *      400:
 *        description: Bad request
 *      500:
 *        description: Error
 */
router.post("/signup", createUserController);

export default router;
